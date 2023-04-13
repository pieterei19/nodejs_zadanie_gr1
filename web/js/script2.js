  function DevList(datas) {
    console.log(datas);
    e("ajax run");
    let devices = datas.data.data;
    let servername = datas.data.servername;
    let ver = datas.data.ver;
    let timeStamp = datas.data.timeStamp.date;
    let contener = "";
    var icon_alt = "";
    var icon_img = "";
    var status_info ="";
    var state = "";
    var state_on = false;
    var state_color = "green";
    var state_status = true;
    var button_box = false;
    for(let i = 0 ; i < devices.length ; i++) {
      contener += '<div id="'+devices[i].id+'" class="col-box">\n<div class="box">';
      if(devices[i].function.id == 40) {
        icon_img = "temperatura.png";
        icon_alt = "Czujnik temperatury";
        state_status = true;
        state = devices[i].state.temperature;
        if(state > -272) {
          status_info = "włączone";
          state = state.toFixed(2) + " &deg;C";
        } else {
          state = "brak danych";
          state_color = "red";
          status_info = "wyłączone";
        }
      }
      if(devices[i].function.id == 140) {
        icon_img = "swiatlo.png";
        icon_alt = "Światło";
        state_status = false;
        button_box = true;
        state_on = devices[i].state.on;
        state = Math.random(0,13).toFixed(2)+"W";
      }
      if(devices[i].function.id == 130) {
        icon_img = "kontakt.png";
        icon_alt = "Kontat";
        state_status = false;
        button_box = true;
        state_on = devices[i].state.on;
        state =  Math.random(0,13).toFixed(2)+"W";
      }      
      contener += '<div class="function-ico"><img alt="'+icon_alt+'" src="/img/'+icon_img+'"></div>\n';
      if(button_box) {
        if(state_on){  
          button_state = "green";
          state_color = "green";
          status_info = "włączone";
          state_status = true;
        } else {
          button_state = "red"; 
          state_color = "red";
          status_info = "wyłączone";
        }
        contener += '<div class="buttonbox">\n';
        contener += '<button class="button-reset btnfunction"><i class="fa-solid icb '+button_state+' fa-circle"></i></button>\n';	
        contener += '<button class="button-reset btnfunction"><i class="fa-solid mtc1 icb '+button_state+' fa-power-off"></i></button>\n</div>\n';
      }
     
