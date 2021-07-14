document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid' ],
      locale: 'es',
      events: [
        {
          title: 'Vacuna BCG',
          start: '2020-06-30'
        },
        {
            title: 'Vacuna Hepatitis B',
            start: '2020-07-02'
          },
        {
            title: 'Vacuna Neumococo',
            start: '2020-07-04',
            end:'2020-07-09'
          },
        {
            title: 'Vacuna Ratavirus',
            start: '2020-08-02'
          }, 
        {
            title: 'Vacuna Meningococo',
            start: '2020-09-10'
          }, 
        {
            title: 'Vacuna Gripe',
            start: '2020-10-10'
          }, 
        {
            title: 'Vacuna Varicela',
            start: '2020-11-28'
          },
        {
            title: 'Vacuna Triple Viral',
            start: '2020-12-15'
          }    
        ] 
    });

    calendar.render();
  });