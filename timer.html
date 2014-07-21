<style>
#container {
  text-align: center;
}
</style>
<div id="container">
  <h1>Timer</h1>
  <form>
    <input type="button" value="Start" id="toggleTimerButton" />
  </form>
</div>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>
var currentTimeSheetEntry = {
  "row": null,
  "column": null,
  "measuring": false,
  "$el": $("#toggleTimerButton"),
  "prepare": function(){
    var this_ = this;
    this_.$el.click(function(){ this_.toggleTimer() }); 
  },
  "toggleTimer": function(){
    var this_ = this;
    if(this_.measuring){
      this_.$el.val("Start");
      this_.measuring = false;
    } else {
      google.script.run.withSuccessHandler(
        function(position) { this_.rememberPosition(position) }
      ).beginTimeSheetEntry();
      this_.$el.val("Stop");
      this_.measuring = true;
    }
  },
  "rememberPosition": function(position){
    this.row = position[0];
    this.column = position[1];
    console.log("row: " + this.row);
    console.log("column: " + this.column);
  }
}
currentTimeSheetEntry.prepare();
</script>
