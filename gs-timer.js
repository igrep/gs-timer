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
  var sheet = SpreadsheetApp.getActiveSheet();
  var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
  if(!neighborCellsAreEmpty_(cell)){
    var ui = SpreadsheetApp.getUi();
    ui.alert('You must empty the active cell and the right next two cells in advance!');
    throw new Error('You must empty the active cell and the right next two cells in advance!');
  }
  cell.setValue(new Date());
  cell.setNumberFormat(TIME_FORMAT);
  return { "sheet": sheet.getName(), "row": cell.getRow(), "column": cell.getColumn() };
}

function endTimeSheetEntry(position) {
  var sheet = SpreadsheetApp.getActive().getSheetByName(position.sheet);
  var row = position.row;
  var column = position.column;

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

function neighborCellsAreEmpty_(cell) {
  if(cell.getFormula()){ return false }

  var sheet = cell.getSheet();

  var rightCell1 = sheet.getRange(cell.getRow(), (cell.getColumn() + 1));
  if(rightCell1.getFormula()){ return false }

  var rightCell2 = sheet.getRange(cell.getRow(), (cell.getColumn() + 2));
  if(rightCell2.getFormula()){ return false }
  return true;
}function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.addMenu('Time Tracking', [{ "name": 'Lauch Timer', "functionName": 'launchTimer_'}]);
}

function launchTimer_() {
  var ui = SpreadsheetApp.getUi();
  ui.showSidebar(HtmlService.createHtmlOutputFromFile('timer.html'));
}

var TIME_FORMAT = "HH:mm:ss";

function beginTimeSheetEntry() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
  if(!neighborCellsAreEmpty_(cell)){
    var ui = SpreadsheetApp.getUi();
    ui.alert('You must empty the active cell and the right next two cells in advance!');
    throw new Error('You must empty the active cell and the right next two cells in advance!');
  }
  cell.setValue(new Date());
  cell.setNumberFormat(TIME_FORMAT);
  return { "sheet": sheet.getName(), "row": cell.getRow(), "column": cell.getColumn() };
}

function endTimeSheetEntry(position) {
  var sheet = SpreadsheetApp.getActive().getSheetByName(position.sheet);
  var row = position.row;
  var column = position.column;

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

function neighborCellsAreEmpty_(cell) {
  if(cell.getFormula()){ return false }

  var sheet = cell.getSheet();

  var rightCell1 = sheet.getRange(cell.getRow(), (cell.getColumn() + 1));
  if(rightCell1.getFormula()){ return false }

  var rightCell2 = sheet.getRange(cell.getRow(), (cell.getColumn() + 2));
  if(rightCell2.getFormula()){ return false }
  return true;
}
