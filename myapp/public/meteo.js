$(function () {

    $.ajax({
        type: "GET",
        url: "http://localhost:3091/meteoreunion",
        dataType: "json",
        success: function (datas) {
            
           var donnees = JSON.parse(datas.body);
    

        //    console.log(donnees)
            // $.each(donnees, function (index, element) {
                var temperature = "temperature pour  : " + donnees.main.temp+"°" 
                var name =  donnees.name
            //     var name = element.name
            $(".donnes").append( "<h2 class='mt-3'>" + name + "</h2><br/>"  )
            $(".donnes").append( temperature + "<br/> <hr>" )
        
    
       
        }
    })
    $.ajax({
        type: "GET",
        url: "http://localhost:3091/meteoparis",
        dataType: "json",
        success: function (datas) {
            
           var donnees = JSON.parse(datas.body);

        //    console.log(donnees)
            // $.each(donnees, function (index, element) {
                var temperature = "temperature pour aujourd'hui : " + donnees.main.temp +"°"
                var name =   donnees.name
            //     var name = element.name
            $(".donnes").append( "<h2 class='mt-3'>" + name + "</h2><br/>" )
            $(".donnes").append( temperature + "<br/> <hr>" )
         
    
       
        }
    })

    $.ajax({
        type: "GET",
        url: "http://localhost:3091/meteomoscow",
        dataType: "json",
        success: function (datas) {
            
           var donnees = JSON.parse(datas.body);

        //    console.log(donnees)
            // $.each(donnees, function (index, element) {
                var temperature = "temperature pour aujourd'hui : " + donnees.main.temp +"°"
                var name = donnees.name
            //     var name = element.name
            $(".donnes").append("<h2>" + name + "</h2><br/>"  )
            $(".donnes").append( temperature + "<br/> <hr>" )
          
    
       
        }
    })

    $.ajax({
        type: "GET",
        url: "http://localhost:3091/meteomarseille",
        dataType: "json",
        success: function (datas) {
            
           var donnees = JSON.parse(datas.body);

        //    console.log(donnees)
            // $.each(donnees, function (index, element) {
                var temperature = "temperature pour aujourd'hui : " + donnees.main.temp +"°"
                var name =  donnees.name
            //     var name = element.name
            $(".donnes").append( "<h2>" + name + "</h2><br/>" )>
            $(".donnes").append( temperature + "<br/> <hr>" )
     
    
       
        }
    })
});