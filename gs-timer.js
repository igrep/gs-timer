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

function endTimeSheetEntry(row, column) {
  if(row && column){
    var sheet = SpreadsheetApp.getActiveSheet()
    var beginTimeCell = sheet.getRange(row, column);
    var endTimeCell = sheet.getRange(row, (column + 1));
    var durationCell = sheet.getRange(row, (column + 2));
    var otherCell = sheet.getRange(row, (column + 3));

    endTimeCell.setValue(new Date());
    durationCell.setFormula(endTimeCell.getA1Notation() + '-' + beginTimeCell.getA1Notation());
    otherCell.activate();
  }
}
