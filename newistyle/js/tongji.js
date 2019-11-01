$(function () {
    // var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
    var whdef = 100/916;// 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight;// 当前窗口的高度
    var wW = window.innerWidth;// 当前窗口的宽度
    // var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    var rem = wH * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    $('html').css('font-size', rem + "px");
    //加载统计图1---当天工作
    loadoOption1();
    //加载统计图2---全局实时工作
    loadoOption2();
    //加载统计图3----近6个月受理汇总
    loadoOption3();
    //加载统计图4----热门事项排行榜
    loadoOption4();
}) ;

//加载统计图1数据
function  loadoOption1(){
    myChart1.clear();

    var data = [{
        value:48,
        name: '接件'
    },{
        value:48,
        name: '受理'
    }, {
        value: 10,
        name: '审查'
    }, {
        value: 1,
        name: '予以许可'
    }, {
        value: 33,
        name: '不予许可'
    }, {
        value: 8,
        name: '决定'
    }];
    var option = {
        title: {
            text:'1000',
            subtext: '总数',
            left:'center',
            top:'50%',
            padding:[24,0],
            textStyle:{
                color:'#fff',
                fontSize:18,
                align:'center'
            }
        },
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            top: '2%',
            left: 'center',
            data: ['接件', '受理', '审查', '予以许可','不予许可','决定'],
            textStyle:{
                fontSize: 12,
                color: '#6cbbe6'
            }
        },
        series: [{
            name: '受理数',
            type: 'pie',
            selectedMode: 'single',
            center : ['50%', '60%'],
            radius: ['40%', '58%'],
            color: ['#C1232B','#B5C334','#FCCE10','#E87C25','#27727B','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD'],
            label: {
                normal: {
                    position: 'outside',
                    formatter: '{b}',
                    textStyle: {
                        color: '#3db3cb',
                        fontSize: 10
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    lineStyle: {
                        color: '#3db3cb'
                    }
                }
            },
            data: data
        }]
    };
    myChart1.setOption(option);

}
//加载统计图2数据
function  loadoOption2(){
    myChart2.clear();
    var data = [{
        value:48,
        name: '接件'
    },{
        value:48,
        name: '受理'
    }, {
        value: 10,
        name: '审查'
    }, {
        value: 1,
        name: '予以许可'
    }, {
        value: 33,
        name: '不予许可'
    }, {
        value: 8,
        name: '决定'
    }];
    var option = {
        title: {
            text:'1000',
            subtext: '总数',
            left:'center',
            top:'50%',
            padding:[24,0],
            textStyle:{
                color:'#fff',
                fontSize:18,
                align:'center'
            }
        },
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            top: '2%',
            left: 'center',
            data: ['接件', '受理', '审查', '予以许可','不予许可','决定'],
            textStyle:{
                fontSize: 12,
                color: '#6cbbe6'
            }
        },
        series: [{
            name: '受理数',
            type: 'pie',
            selectedMode: 'single',
            center : ['50%', '60%'],
            radius: ['40%', '58%'],
            color: ['#C1232B','#B5C334','#FCCE10','#E87C25','#27727B','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD'],
            label: {
                normal: {
                    position: 'outside',
                    formatter: '{b}',
                    textStyle: {
                        color: '#3db3cb',
                        fontSize: 10
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    lineStyle: {
                        color: '#3db3cb'
                    }
                }
            },
            data: data
        }]
    };
    myChart2.setOption(option);
}

//加载统计图3数据
function  loadoOption3(){
    myChart3.clear();

    var option = {
        title: {
            text: '最近6个月受理汇总',
            show: true,
            textStyle: {
                fontWeight: 'normal',
                fontSize: 22,
                color: '#3db3cb'
            },
            left: '2%',
            top: '2%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#3db3cb'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: 'rgba(128, 128, 128, 0.5)'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: '#999'
                }
            },
            data: ['2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12']
        }],
        yAxis: [{
            type: 'value',
            name: '',
            axisTick: {
                show: false
            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: '#799dff'
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(121, 157, 255, 0.5)'
                }
            }
        }],
        series: [{
            name: '受理数',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)',
                    borderColor: 'rgba(0,136,212,0.2)',
                    borderWidth: 12

                }
            },
            data: [120, 110, 145, 122, 165, 150]
        }, ]
    }
    myChart3.setOption(option);
}

//热门事项排行
function  loadoOption4(){
    myChart4.clear();
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top:'5%',
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true,
        },
        xAxis: {
            type: 'value',
            position:'top',
            splitLine: {show: false},
            boundaryGap: [0, 0.01],
            axisLabel:{
                textStyle:{
                    color: '#6cbbe6'
                }
            },
        },
        yAxis: {
            type: 'category',
            splitLine: {show: false},
            data: ['价格认定','护士执业注册','再生育证审批','社会团体登记','医师执业注册','印刷企业设立','污染物排放','教师资格认定'],
            axisLabel:{
                textStyle:{
                    fontSize: 12,
                    color: '#6cbbe6'
                }
            },
        },
        series: [
            {
                name: '办理数',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ];
                            return colorList[params.dataIndex]
                        },
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                barWidth:10,
                barGap:20,
                type: 'bar',
                data: [92,132,142,181,212,28,382,41]
            }
        ]
    };
    myChart4.setOption(option);
}

