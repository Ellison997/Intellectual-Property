$(document).ready(function () {

    var shandongChart = echarts.init(document.getElementById('shandong'));

    $.get("assets/base/map/shandong.json", function (shandongJson) {
        echarts.registerMap('shandong', shandongJson);
        shandongChart.setOption({
            tooltip: {
                trigger: 'item'
            },
            geo: {
                type: 'effectScatter',
                map: 'shandong',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#3498DB',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: '#32c5d2'
                    }
                }
            },
            series: [

                {
                    name: '市', // series名称
                    type: 'scatter', // series图表类型
                    coordinateSystem: 'geo', // series坐标系类型
                    symbolSize: function () {
                        return 15;
                    },
                    data: [{ name: '济南市', value: [117.126488, 36.658194] },
                    { name: '青岛市', value: [120.332726, 36.070867] },
                    { name: '淄博市', value: [118.060434, 36.823215] },
                    { name: '枣庄市', value: [117.340961, 34.811623] },
                    { name: '东营市', value: [118.653126, 37.453625] },
                    { name: '烟台市', value: [121.387344, 37.53213] },
                    { name: '潍坊市', value: [119.135073, 36.712103] },
                    { name: '济宁市', value: [116.636886, 35.436544] },
                    { name: '泰安市', value: [117.094103, 36.206203] },
                    { name: '威海市', value: [122.104006, 37.521353] },
                    { name: '日照市', value: [119.536967, 35.422638] },
                    { name: '滨州市', value: [117.959372, 37.38968] },
                    { name: '德州市', value: [116.365633, 37.441323] },
                    { name: '聊城市', value: [116.043883, 36.453459] },
                    { name: '临沂市', value: [118.356682, 35.110923] },
                    { name: '菏泽市', value: [115.468333, 35.24086] },
                    { name: '莱芜市', value: [117.683221, 36.219356] },], // series数据内容
                    itemStyle: {
                        normal: {
                            color: '#C0FF3E'
                        }
                    }
                },
                {
                    name: '省', // series名称
                    type: 'effectScatter', // series图表类型
                    coordinateSystem: 'geo', // series坐标系类型
                    symbolSize: function () {
                        return 20;
                    },
                    data: [{ name: '山东省', value: [117.096921, 36.662769] }], // series数据内容
                    itemStyle: {
                        normal: {
                            color: '#C0FF3E'
                        }
                    }
                }
            ]
        });
    });


    //初始化

    var zhexian = echarts.init(document.getElementById('zhexian'));

    //参数设置

    option = {

        title: {      //标题组件

            text: '山东省许可趋势'

        },

        tooltip: {    //提示框组件

            trigger: 'axis'

        },

        grid: {       //直角坐标系内绘图网格

            left: '3%',

            right: '4%',

            bottom: '3%',

            containLabel: true

        },

        xAxis: {       //直角坐标系 grid 中的 x 轴

            type: 'category',

            boundaryGap: false,

            data: ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"]

        },

        yAxis: {       //直角坐标系 grid 中的 y 轴

            type: 'value'

        },

        series: [      //系列列表

            {

                name: '山东',

                type: 'line',

                stack: '总量',

                data: [3, 294, 656, 952, 959, 546, 631, 467, 496, 134]

            }
        ]

    };

    zhexian.setOption(option);   //参数设置方法    


    //初始化

    var zhuzhuang = echarts.init(document.getElementById('zhuzhuang'));

    option = {

        title: {      //标题组件

            text: '全国各省许可总量'

        },

        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ["浙江", "广东", "江苏", "北京", "黑龙江", "山东", "福建", "上海", "安徽", "四川"],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '数量',
                type: 'bar',
                barWidth: '60%',
                data: [22825, 22209, 17415, 8710, 6117, 5262, 5078, 4828, 3958, 3468]
            }
        ]
    };

    zhuzhuang.setOption(option);   //参数设置方法    

    //山东各地市授权了初始化
    var accreditNationwideHistogram = echarts.init(document.getElementById('anh'));

    HistogramOption = {
        title: {      //标题组件

            text: '山东各地市授权'

        },
        color: ['#003366', '#006699', '#4cabce', '#e5323e'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: ["实用新型", "外观设计", "发明授权"]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '青岛',
                type: 'bar',
                barGap: 0,
                data: [93611, 28689, 26440]
            },
            {
                name: '济南',
                type: 'bar',
                data: [97154, 13854, 24509]
            },
            {
                name: '潍坊',
                type: 'bar',
                data: [57272, 15873, 6347]
            },
            {
                name: '烟台',
                type: 'bar',
                data: [36927, 13046, 7068]
            },
            {
                name: '济宁',
                type: 'bar',
                barGap: 0,
                data: [43422, 5328, 3229]
            },
            {
                name: '淄博',
                type: 'bar',
                data: [32720, 9417, 6818]
            },
            {
                name: '威海',
                type: 'bar',
                data: [21887, 9588, 3518]
            },
            {
                name: '临沂',
                type: 'bar',
                barGap: 0,
                data: [19818, 10182, 3852]
            },
            {
                name: '东营',
                type: 'bar',
                data: [26616, 2804, 2371]
            },
            {
                name: '泰安',
                type: 'bar',
                data: [22188, 2767, 2530]
            },
            {
                name: '滨州',
                type: 'bar',
                barGap: 0,
                data: [18623, 3043, 1872]
            },
            {
                name: '德州',
                type: 'bar',
                data: [17203, 4188, 1642]
            },
            {
                name: '聊城',
                type: 'bar',
                data: [15715, 2264, 2509]
            },
            {
                name: '枣庄',
                type: 'bar',
                barGap: 0,
                data: [13980, 3045, 1387]
            },
            {
                name: '菏泽',
                type: 'bar',
                data: [13423, 3492, 1429]
            },
            {
                name: '莱芜',
                type: 'bar',
                data: [16714, 268, 1357]
            },
            {
                name: '日照',
                type: 'bar',
                data: [12146, 2364, 1017]
            }
        ]
    };


    accreditNationwideHistogram.setOption(HistogramOption);


    //全国授权量折线图初始化

    var accreditNationwideLine = echarts.init(document.getElementById('anw'));

    //参数设置

    option = {

        title: {      //标题组件

            text: '山东授权趋势'

        },

        tooltip: {    //提示框组件

            trigger: 'axis'

        },

        grid: {       //直角坐标系内绘图网格

            left: '3%',

            right: '4%',

            bottom: '3%',

            containLabel: true

        },

        xAxis: {       //直角坐标系 grid 中的 x 轴

            type: 'category',

            boundaryGap: false,

            data: ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"]

        },

        yAxis: {       //直角坐标系 grid 中的 y 轴

            type: 'value'

        },

        series: [      //系列列表

            {

                name: '山东',

                type: 'line',

                stack: '总量',

                data: [22060, 26644, 33796, 47950, 58519, 73898, 81855, 71729, 95648, 100081]
            }

        ]

    };

    accreditNationwideLine.setOption(option);   //参数设置方法    
});
