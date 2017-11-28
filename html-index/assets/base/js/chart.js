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
                        },
                    },
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                },
                series: [
    
                    {
                        name: '市', // series名称
                        type: 'map', // series图表类型
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
                        type: 'map', // series图表类型
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
        $.get("http://www.chuangxinjiance.com/analysisService/getAnalysisResult?flag=3.3&_=1511406398442", function (trend) {
        //参数设置
        trend.data.series[5].data.shift();
        trend.data.xAxis.shift();
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
    
                data: trend.data.xAxis
    
            },
    
            yAxis: {       //直角坐标系 grid 中的 y 轴
    
                type: 'value'
    
            },
    
            series: [      //系列列表
    
                {
    
                    name: '山东',
    
                    type: 'line',
    
                    stack: '总量',
    
                    data: trend.data.series[5].data
    
                }
            ]
    
        };
    
        zhexian.setOption(option);   //参数设置方法    
    });
    
        //初始化
    
        var zhuzhuang = echarts.init(document.getElementById('zhuzhuang'));
        $.get("http://www.chuangxinjiance.com/analysisService/getAnalysisResult?flag=3.2&_=1511406398441", function (license) {
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
                        data: license.data.xAxis,
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
                        data: license.data.series[0].data
                    }
                ]
            };
    
            zhuzhuang.setOption(option);   //参数设置方法    
        });
    
    
        //山东各地市授权了初始化
        var accreditNationwideHistogram = echarts.init(document.getElementById('anh'));
    
        var urlAnh="http://www.chuangxinjiance.com/analysisService/getAnalysisResult?flag=1.6&_=1511485598923";
        var jsonAnh=null;    
        $.ajax({
              type: "get",//请求方式
              url: urlAnh,//地址，就是json文件的请求路径
              dataType: "json",//数据类型可以为 text xml json  script  jsonp
    　　 　　  success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数
              var jsonAnh= result.data.series;
              jsonAnh[17].data=[1,0,0];
              var shiyong=0;
              var xinxing=0;
              var faming =0;
            for(var o in jsonAnh){  
                shiyong+=jsonAnh[o].data[0];
                xinxing+=jsonAnh[o].data[1];
                faming+=jsonAnh[o].data[2];
    
            }       
    
        HistogramOption = {
            title : {
                text: '山东省授权类别',
                
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            
            series : [
                {
                    name: '分类',
                    type: 'pie',
                    radius : '60%',
                    center: ['50%', '65%'],
                    data:[
                        {value:shiyong, name:'实用新型'},
                        {value:xinxing, name:'外观设计'},
                        {value:faming, name:'发明授权'}
                        
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
    
    
        };
        accreditNationwideHistogram.setOption(HistogramOption);
    
              }
        });
    
    
    
        //全国授权量折线图初始化
    
        var accreditNationwideLine = echarts.init(document.getElementById('anw'));
    
        //参数设置
        $.get("http://www.chuangxinjiance.com/analysisService/getAnalysisResult?flag=1.4&_=1511490516953", function (accredit) {
            accredit.data.series[5].data.shift();
            accredit.data.xAxis.shift();
        nationOption = {
    
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
    
                data: accredit.data.xAxis
    
            },
    
            yAxis: {       //直角坐标系 grid 中的 y 轴
    
                type: 'value'
    
            },
    
            series: [      //系列列表
    
                {
    
                    name: '山东',
    
                    type: 'line',
    
                    stack: '总量',
    
                    data: accredit.data.series[3].data
                }
    
            ]
    
        };
    
        accreditNationwideLine.setOption(nationOption);   //参数设置方法  
        });
    
    
    
    });
    
    //检测平台
    $.get("http://www.chuangxinjiance.com/analysisService/getAnalysisResult?flag=1.3&_=1511485598921", function (accreditdb) {
        //document.getElementById('accredit').innerHTML=accreditdb.data.number;
        
    });