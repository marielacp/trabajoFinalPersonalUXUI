window.addEventListener('load', function() {
 

  /* funcion para mostrar las alumas por sede-generacion*/
  var selection = document.getElementById('selection');
  var containerStudents = document.getElementById('total-students');
  var totalNps = document.getElementById('total-nps');
 // var sectioNps = document.getElementById('seccion-nps');
  var promotersNps = document.getElementById('promoters');
  var passiveNps = document.getElementById ('passive');
  var detractorsNps = document.getElementById ('detractors');
  var containerFilter2 = document.getElementById('containerFilter2');
  var containerFilter3 = document.getElementById('containerFilter3');
  var containerFilter4 = document.getElementById('containerFilter4');
  var containerFilter5 = document.getElementById('containerFilter5');
  selection.addEventListener('change', showSelectGenerations);

 // console.log(selectiong);
 // console.log(dataNew);
 // console.log(newArrayDataGeneration);
 // console.log(newDataGeneration['students']);
 // console.log(promoters);
 // console.log(percentage);
// selection.addEventListener('click', showPercent);
/********************************************************************************** */


  function showSelectGenerations(event) {
    var selectiong = selection.value; // se iguala a opciones;
    var dataNew = selectiong.split('-');//sepedaramos convertimos nuevo array
    var newArrayData = dataNew.splice(1, 2);//convertimos en array
    var newArrayDataGeneration = newArrayData[0] + '-' + newArrayData[1];
    var newArrayDataSite = dataNew.splice(0, 1);
    var newDataGeneration = data[newArrayDataSite][newArrayDataGeneration];


    var studentsInscritos = newDataGeneration['students'].length;
   // containerStudents.innerHTML = '# de studiantes inscritos' + '<br>' + studentsInscritos;
    
/********************************************************************************* */


/********************************************************************************* */
    var result = 0;
    /* recorriendo el elemento ratings para obtner el nps*/
    for (i = 0; i < newDataGeneration['ratings'].length;i++) {
      var promoters = newDataGeneration['ratings'][i].nps.promoters;
      var passive = newDataGeneration['ratings'][i].nps.passive;
      var detractors = newDataGeneration['ratings'][i].nps.detractors;
      result = result + (promoters - detractors);
      var percentage = ((result / newDataGeneration['ratings'].length) * 100) / 100 ;
      percentage.toFixed(2) + ' % ';
}
      
/************************************************************************************** */
     
/**************************************************************************************** */

    /* incorporando el porcentaje del nps*/
    totalNps.innerHTML = '% NPS' + '<br>' + (percentage).toFixed(2);
    /* incorporando el porcentaje del nps*/
  
    /* analizando el */
    promotersNps.innerHTML = promoters + '% Promoters' ;
    passiveNps.innerHTML = passive + '% Passive'; 
    detractorsNps.innerHTML = detractors + '% Detractors'; 

    var countPerct = 0;
    var countPerctTrue = 0;
    for (var i = 0; i < newDataGeneration['students'].length; i++) {
      if (newDataGeneration['students'][i]['active'] === false) {
        countPerct++;
        var percent = ((countPerct * 100) / (newDataGeneration['students'].length)).toFixed(2) + '% ';
        containerFilter2.innerHTML = percent + '</br>' + '% DROPOUT' + '</br>'+' (Deserciòn)';
      }
      else if (newDataGeneration['students'][i]['active'] === true) {
         countPerctTrue++;
          containerStudents.innerHTML = '# de studiantes inscritos' + '<br>' + countPerctTrue;
       
      }
    }

    var countSprints = 0;
    for (var i = 0; i < newDataGeneration['students'].length; i++) {
      for (var j = 0; j < newDataGeneration['students'][i]['sprints'].length; j++) {
        if (newDataGeneration['students'][i]['sprints'][j]['score']['tech'] <= 1260 && newDataGeneration['students'][i]['sprints'][j]['score']['hse'] <=840) {
          countSprints++;
          containerFilter3.innerHTML = countSprints + '</br>' + 'STUDENTS THAT MEER THE TARGET';
          var percentCountSprints = ((countSprints * 100) / countPerctTrue).toFixed(2) + '% ';
          containerFilter4.innerHTML = percentCountSprints + '</br>' + 'OF Total' +' '+countPerctTrue;
        }
      }
    }
      /******************************Superan sprint tecnico */
      var countSprintsTech = 0;
      for (var i = 0; i < newDataGeneration['students'].length; i++) {
        for (var j = 0; j < newDataGeneration['students'][i]['sprints'].length; j++) {
          if (newDataGeneration['students'][i]['sprints'][j]['score']['tech'] <1260) {
            countSprintsTech++;
            containerFilter5.innerHTML = countSprints + '</br>' + 'Estudiantes que superan meta de Puntos Tecnicos x Sprints';
            var numSprints = newDataGeneration['students'][i]['sprints']['number'];
            var promSprints = newDataGeneration['students'][i]['sprints'][j]['score']['tech'];

          }
    }   
  }

  /* menu derecho*/
  var bars = document.getElementById('bars');
    bars.addEventListener('click', showMenu);
    function showMenu(event) {
      var options = document.getElementById('options-menu');
      if (options.classList.contains('disabled-menu')) {
        options.classList.remove('disabled-menu');
        options.classList.add('enabled-menu');
      } else {
        options.classList.remove('enabled-menu');
        options.classList.add('disabled-menu');
      }
    }
      
    }
});