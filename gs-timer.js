function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.addMenu('Time Tracking', [{ "name": 'Lauch Timer', "functionName": 'launchTimer_'}]);
}

function launchTimer_() {
  var ui = SpreadsheetApp.getUi();
  ui.showSidebar(HtmlService.createHtmlOutputFromFile('timer.html'));
}

var TIME_FORMAT = "HH:mm:ss";

function beginTimeSheetEntry() {
  var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
  cell.setValue(new Date());
  cell.setNumberFormat(TIME_FORMAT);
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
    endTimeCell.setNumberFormat(TIME_FORMAT);
    durationCell.setFormula(endTimeCell.getA1Notation() + '-' + beginTimeCell.getA1Notation());
    durationCell.setNumberFormat(TIME_FORMAT);
    otherCell.activate();
  }
}
