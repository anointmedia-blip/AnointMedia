# Google Sheets Integration Setup Guide

Follow these steps to connect your website forms (both the main contact form and service consultation forms) to your Google Sheet:

Spreadsheet Link: [https://docs.google.com/spreadsheets/d/1b9VNT3AseV3DjT3bl8UygIBzLXyPNpxyY-8GBTaUgtI/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1b9VNT3AseV3DjT3bl8UygIBzLXyPNpxyY-8GBTaUgtI/edit?usp=sharing)

---

## Step 1: Open Google Sheets Apps Script
1. Open your Google Sheet in your web browser.
2. Click on **Extensions** in the top menu bar, then click **Apps Script**.
3. Delete any default code inside the editor (usually `function myFunction() { ... }`).

---

## Step 2: Paste the Apps Script Code
Copy the entire block of JavaScript code below and paste it into the Apps Script editor:

```javascript
function doPost(e) {
  // Allow cross-origin requests (CORS)
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();
    
    // Auto-create header row if sheet is completely empty
    var currentHeaders = sheet.getRange(1, 1, 1, Math.max(1, sheet.getLastColumn())).getValues()[0];
    if (currentHeaders.length === 0 || currentHeaders[0] === "") {
      currentHeaders = [
        "Timestamp", 
        "Form Type", 
        "Service Name", 
        "Full Name", 
        "Email", 
        "Phone", 
        "Company / Website", 
        "Services Selected", 
        "Budget Range", 
        "Contact Method", 
        "Project Details / Message"
      ];
      sheet.getRange(1, 1, 1, currentHeaders.length).setValues([currentHeaders]);
      sheet.setFrozenRows(1); // Freeze the header row
    }
    
    // Map JSON request keys into the corresponding columns
    var newRow = currentHeaders.map(function(header) {
      if (header === "Timestamp") return timestamp;
      
      // Clean header text to match JSON keys
      var key = header.toLowerCase().replace(/[^a-z0-9]/g, "");
      
      if (key === "formtype") return data.formType || "General Contact";
      if (key === "servicename") return data.serviceName || "";
      if (key === "fullname") return data.fullName || "";
      if (key === "email") return data.email || "";
      if (key === "phone") return data.phone || "";
      if (key === "companywebsite") return data.company || data.website || "";
      
      // If service is an array, join with commas
      if (key === "servicesselected") {
        return Array.isArray(data.service) ? data.service.join(", ") : (data.service || "");
      }
      
      // If budget is an array, join with commas
      if (key === "budgetrange") {
        return Array.isArray(data.budget) ? data.budget.join(", ") : (data.budget || "");
      }
      
      if (key === "contactmethod") return data.contactMethod || "";
      if (key === "projectdetailsmessage") return data.projectDetails || data.message || "";
      
      // Fallback matching
      for (var k in data) {
        if (k.toLowerCase().replace(/[^a-z0-9]/g, "") === key) {
          var val = data[k];
          if (Array.isArray(val)) return val.join(", ");
          return val;
        }
      }
      return "";
    });
    
    sheet.appendRow(newRow);
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }
}

// Handle preflight OPTIONS requests for CORS compliance
function doOptions(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}
```

---

## Step 3: Save and Deploy the Script
1. Click the **Save** icon (disk symbol) in the Apps Script editor toolbar.
2. Click the **Deploy** button at the top-right and select **New deployment**.
3. Click the gear icon next to "Select type" and choose **Web app**.
4. Configure the settings:
   - **Description**: `Anoint Media Lead Forms API`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone` *(Crucial: do not select "Only myself" or "Anyone with a Google Account")*
5. Click **Deploy**.
6. Google will ask you to authorize access. Click **Authorize Access**, choose your Google account, click **Advanced**, and then click **Go to Untitled project (unsafe)**. Finally, click **Allow**.

---

## Step 4: Copy the Web App URL and Update Code
1. Once the deployment succeeds, you will see a window showing the **Web App URL**.
2. Click **Copy** to copy the URL (it looks like `https://script.google.com/macros/s/AKfy.../exec`).
3. Open `src/config/sheets.js` in this codebase.
4. Replace the existing URL with the copied URL:

```javascript
export const GOOGLE_SHEET_SCRIPT_URL = "PASTE_YOUR_COPIED_URL_HERE";
```

5. Save the file.

Your forms are now fully integrated and will save all leads directly to your Google Sheet!
