function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.addMenu('Time Tracking', [{ "name": 'Lauch Timer', "functionName": 'launchTimer_'}]);
}

function launchTimer_() {
  var ui = SpreadsheetApp.getUi();
  ui.showSidebar(HtmlService.createHtmlOutputFromFile('timer.html'));
}

function beginTimeSheetEntry() {
  var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
  cell.setValue(new Date());
  return [cell.getRow(), cell.getColumn()];
}
