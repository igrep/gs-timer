function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.addMenu('Time Tracking', [{ "name": 'Lauch Timer', "functionName": 'launchTimer_'}]);
}

function launchTimer_() {
  var ui = SpreadsheetApp.getUi();
  ui.alert('Launching Timer!');
}
