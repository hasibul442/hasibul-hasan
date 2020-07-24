function Circlle(el){
    $(el).circleProgress({fill: {color: '#f25c54'}})
    .on('circle-animation-progress',function(event,progress,stepValue){
        $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
    });
};

Circlle('.round');