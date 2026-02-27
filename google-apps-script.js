/**
 * Google Apps Script for The Algorithmic Edge Contact Form
 * 
 * INSTRUCTIONS:
 * 1. Go to https://script.google.com/home/start and create a new project.
 * 2. Paste this code into the editor (Code.gs).
 * 3. Run the 'setup' function once to create the headers in your Sheet.
 * 4. Click "Deploy" > "New deployment".
 * 5. Select type: "Web app".
 * 6. Description: "Contact Form v1".
 * 7. Execute as: "Me".
 * 8. Who has access: "Anyone" (IMPORTANT: This allows the website to send data).
 * 9. Copy the "Web app URL" and paste it into your website configuration.
 */

const SHEET_NAME = 'Sheet1';
const EMAIL_SUBJECT = 'Welcome to The Algorithmic Edge';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(SHEET_NAME);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    // Map incoming parameters to headers
    // Adds a Timestamp automatically
    const newRow = headers.map(function(header) {
      if (header === 'Timestamp') return new Date();
      return e.parameter[header] || '';
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    // Send Auto-Response Email
    const userEmail = e.parameter.email;
    const userName = e.parameter.name || 'Future Client';
    
    if (userEmail) {
      const htmlBody = `
        <div style="font-family: sans-serif; color: #050A14;">
          <h2 style="color: #00F0FF;">Message Received.</h2>
          <p>Hello ${userName},</p>
          <p>We have received your project inquiry at <strong>The Algorithmic Edge</strong>.</p>
          <p>Our team is currently analyzing your vision ("${e.parameter.vision || 'Project'}") and will respond within 24 hours to discuss the next steps.</p>
          <br>
          <p><em>Stay sharp,</em><br>The Algorithmic Edge Team</p>
        </div>
      `;
      
      GmailApp.sendEmail(userEmail, EMAIL_SUBJECT, "", {
        htmlBody: htmlBody,
        name: 'The Algorithmic Edge'
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Run this function once to set up your Google Sheet
function setup() {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = doc.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    sheet = doc.insertSheet(SHEET_NAME);
  }
  
  // Define columns
  const headers = [
    'Timestamp', 
    'name', 
    'email', 
    'edge', 
    'impact', 
    'date', 
    'investment', 
    'vision', 
    'source'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.setFrozenRows(1);
}
