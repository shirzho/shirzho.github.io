$(document).ready(function() {
  $('#pme').hide()
  $('#pdes').hide();
  $('#pdev').hide();
  $('#pdream').hide();

  $("#me").mouseover( function() {
        $("#pme").show()
      }
  );
  $("#me").mouseleave( function() {
        $("#pme").hide()
      }
  );

  $("#des").mouseover( function() {
        $("#pdes").show()
      }
  );
  $("#des").mouseleave( function() {
        $("#pdes").hide()
      }
  );

  $("#dev").mouseover(function () {
      $("#pdev").show()
    }
  );
  $("#dev").mouseleave( function() {
        $("#pdev").hide()
      }
  );

  $("#dream").mouseover( function() {
      $("#pdream").show()
    }
  );
  $("#dream").mouseleave( function() {
        $("#pdream").hide()
      }
  );

});
