let context = document
    .getElementById('myChart')
    .getContext('2d');
let myChart = new Chart(context, {
    type: 'bar', // 차트의 형태
    data: { // 차트에 들어갈 데이터
        labels: [
            //x 축
            '2010', '2011', '2012', '2013', '2014', '2015', '2016','2017', '2018', '2019', '2020', '2021', '2022', '2023'
        ],
        datasets: [
            { //데이터
                label: 'Korail 사용에 따른 탄소배출량 감소 현황', //차트 제목
                fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                data: [
                    2100, 1920, 1750, 1400, 1200, 1100, 900, 1200, 820, 850, 700, 680, 500, 400  //x축 label에 대응되는 데이터 값
                ],
                backgroundColor: [
                    //색상
                    '#1A2F5F95',
                    '#1c5cbb95',
                ],
                borderColor: [
                    //경계선 색상
                    '#1A2F5F',
                    '#1c5cbb',
                ],
                borderWidth: 1 //경계선 굵기
            }
        ]
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
});