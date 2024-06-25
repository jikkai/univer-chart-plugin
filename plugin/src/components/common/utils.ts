/**
 * Copyright 2024-present xxs3315
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Tools } from '@univerjs/core';
import { CHART_THEME_DEFAULT } from '../../common/themes';

export const getTheme = (themeName: string) => {
    const t: any = CHART_THEME_DEFAULT;
    const pumpkin = 'path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z';
    const seriesStyle = {
        itemStyle: {
            borderWidth: t.symbolBorderWidth,
        },
        lineStyle: {
            width: t.lineWidth,
        },
        symbolSize: t.symbolSize,
        symbol: t.symbol,
        smooth: t.lineSmooth,
    };
    const itemStyle = {
        borderWidth: t.borderWidth,
        borderColor: t.borderColor,
    };
    const border: any = {
        itemStyle,
    };
    if (themeName === 'halloween') {
        seriesStyle.symbol = pumpkin;
        border.symbol = pumpkin;
    }

    const map = {
        itemStyle: {
            areaColor: t.mapAreaColor,
            borderColor: t.mapBorderColor,
            borderWidth: t.mapBorderWidth,
        },
        label: {
            color: t.mapLabelColor,
        },
        emphasis: {
            itemStyle: {
                areaColor: t.mapAreaColorE,
                borderColor: t.mapBorderColorE,
                borderWidth: t.mapBorderWidthE,
            },
            label: {
                color: t.mapLabelColorE,
            },
        },
    };

    return {
        color: t.color,
        backgroundColor: t.backgroundColor,
        textStyle: t.textColorShow
            ? {
                color: t.textColor,
            }
            : {},
        title: {
            textStyle: {
                color: t.titleColor,
            },
            subtextStyle: {
                color: t.subtitleColor,
            },
        },
        line: seriesStyle,
        radar: seriesStyle,
        bar: (function () {
            const itemStyle = {
                barBorderWidth: t.borderWidth,
                barBorderColor: t.borderColor,
            };
            return {
                itemStyle,
            };
        })(),
        pie: border,
        scatter: border,
        boxplot: border,
        parallel: border,
        sankey: border,
        funnel: border,
        gauge: border,
        candlestick: (function () {
            const itemStyle = {
                color: t.kColor,
                color0: t.kColor0,
                borderColor: t.kBorderColor,
                borderColor0: t.kBorderColor0,
                borderWidth: t.kBorderWidth,
            };
            return {
                itemStyle,
            };
        })(),
        graph: (function () {
            const style: any = Tools.deepClone(seriesStyle);
            style.color = t.color;
            const lineStyle = {
                width: t.graphLineWidth,
                color: t.graphLineColor,
            };
            const textStyle = {
                color: t.markTextColor,
            };
            style.lineStyle = lineStyle;
            style.label = textStyle;
            const itemStyle = style.itemStyle;
            itemStyle.borderWidth = t.borderWidth;
            itemStyle.borderColor = t.borderColor;
            return style;
        })(),
        map,
        geo: map,
        categoryAxis: getAxis(1),
        valueAxis: getAxis(2),
        logAxis: getAxis(3),
        timeAxis: getAxis(4),
        toolbox: {
            iconStyle: {
                borderColor: t.toolboxColor,
            },
            emphasis: {
                iconStyle: {
                    borderColor: t.toolboxEmphasisColor,
                },
            },
        },
        legend: {
            textStyle: {
                color: t.legendTextColor,
            },
        },
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: t.tooltipAxisColor,
                    width: t.tooltipAxisWidth,
                },
                crossStyle: {
                    color: t.tooltipAxisColor,
                    width: t.tooltipAxisWidth,
                },
            },
        },
        timeline: {
            lineStyle: {
                color: t.timelineLineColor,
                width: t.timelineLineWidth,
            },
            itemStyle: {
                color: t.timelineItemColor,
                borderWidth: t.timelineItemBorderWidth,
            },
            controlStyle: {
                color: t.timelineControlColor,
                borderColor: t.timelineControlBorderColor,
                borderWidth: t.timelineControlBorderWidth,
            },
            checkpointStyle: {
                color: t.timelineCheckColor,
                borderColor: t.timelineCheckBorderColor,
            },
            label: {
                color: t.timelineLabelColor,
            },
            emphasis: {
                itemStyle: {
                    color: t.timelineItemColorE,
                },
                controlStyle: {
                    color: t.timelineControlColor,
                    borderColor: t.timelineControlBorderColor,
                    borderWidth: t.timelineControlBorderWidth,
                },
                label: {
                    color: t.timelineLabelColor,
                },
            },
        },
        visualMap: {
            color: t.visualMapColor,
        },
        dataZoom: {
            backgroundColor: t.datazoomBackgroundColor,
            dataBackgroundColor: t.datazoomDataColor,
            fillerColor: t.datazoomFillColor,
            handleColor: t.datazoomHandleColor,
            handleSize: `${t.datazoomHandleWidth}%`,
            textStyle: {
                color: t.datazoomLabelColor,
            },
        },
        markPoint: (function () {
            const textStyle = {
                color: t.markTextColor,
            };
            return {
                label: textStyle,
                emphasis: {
                    label: textStyle,
                },
            };
        })(),
    };

    function getAxis(id: number) {
        if (!t.axisSeperateSetting) {
            id = 0;
        }
        return {
            axisLine: {
                show: t.axes[id].axisLineShow,
                lineStyle: {
                    color: t.axes[id].axisLineColor,
                },
            },
            axisTick: {
                show: t.axes[id].axisTickShow,
                lineStyle: {
                    color: t.axes[id].axisTickColor,
                },
            },
            axisLabel: {
                show: t.axes[id].axisLabelShow,
                color: t.axes[id].axisLabelColor,
            },
            splitLine: {
                show: t.axes[id].splitLineShow,
                lineStyle: {
                    color: t.axes[id].splitLineColor,
                },
            },
            splitArea: {
                show: t.axes[id].splitAreaShow,
                areaStyle: {
                    color: t.axes[id].splitAreaColor,
                },
            },
        };
    }
};
