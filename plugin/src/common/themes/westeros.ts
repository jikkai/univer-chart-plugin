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

export const CHART_THEME_WESTEROS = {
    version: 1,
    themeName: 'westeros',
    theme: {
        seriesCnt: '4',
        backgroundColor: 'rgba(0,0,0,0)',
        titleColor: '#516b91',
        subtitleColor: '#93b7e3',
        textColorShow: false,
        textColor: '#333',
        markTextColor: '#eee',
        color: [
            '#516b91',
            '#59c4e6',
            '#edafda',
            '#93b7e3',
            '#a5e7f0',
            '#cbb0e3',
        ],
        borderColor: '#ccc',
        borderWidth: 0,
        visualMapColor: [
            '#516b91',
            '#59c4e6',
            '#a5e7f0',
        ],
        legendTextColor: '#999999',
        kColor: '#edafda',
        kColor0: 'transparent',
        kBorderColor: '#d680bc',
        kBorderColor0: '#8fd3e8',
        kBorderWidth: '2',
        lineWidth: '2',
        symbolSize: '6',
        symbol: 'emptyCircle',
        symbolBorderWidth: '2',
        lineSmooth: true,
        graphLineWidth: 1,
        graphLineColor: '#aaa',
        mapLabelColor: '#000',
        mapLabelColorE: '#516b91',
        mapBorderColor: '#516b91',
        mapBorderColorE: '#516b91',
        mapBorderWidth: 0.5,
        mapBorderWidthE: 1,
        mapAreaColor: '#f3f3f3',
        mapAreaColorE: '#a5e7f0',
        axes: [
            {
                type: 'all',
                name: '通用坐标轴',
                axisLineShow: true,
                axisLineColor: '#cccccc',
                axisTickShow: false,
                axisTickColor: '#333',
                axisLabelShow: true,
                axisLabelColor: '#999999',
                splitLineShow: true,
                splitLineColor: [
                    '#eeeeee',
                ],
                splitAreaShow: false,
                splitAreaColor: [
                    'rgba(250,250,250,0.05)',
                    'rgba(200,200,200,0.02)',
                ],
            },
            {
                type: 'category',
                name: '类目坐标轴',
                axisLineShow: true,
                axisLineColor: '#333',
                axisTickShow: true,
                axisTickColor: '#333',
                axisLabelShow: true,
                axisLabelColor: '#333',
                splitLineShow: false,
                splitLineColor: [
                    '#ccc',
                ],
                splitAreaShow: false,
                splitAreaColor: [
                    'rgba(250,250,250,0.3)',
                    'rgba(200,200,200,0.3)',
                ],
            },
            {
                type: 'value',
                name: '数值坐标轴',
                axisLineShow: true,
                axisLineColor: '#333',
                axisTickShow: true,
                axisTickColor: '#333',
                axisLabelShow: true,
                axisLabelColor: '#333',
                splitLineShow: true,
                splitLineColor: [
                    '#ccc',
                ],
                splitAreaShow: false,
                splitAreaColor: [
                    'rgba(250,250,250,0.3)',
                    'rgba(200,200,200,0.3)',
                ],
            },
            {
                type: 'log',
                name: '对数坐标轴',
                axisLineShow: true,
                axisLineColor: '#333',
                axisTickShow: true,
                axisTickColor: '#333',
                axisLabelShow: true,
                axisLabelColor: '#333',
                splitLineShow: true,
                splitLineColor: [
                    '#ccc',
                ],
                splitAreaShow: false,
                splitAreaColor: [
                    'rgba(250,250,250,0.3)',
                    'rgba(200,200,200,0.3)',
                ],
            },
            {
                type: 'time',
                name: '时间坐标轴',
                axisLineShow: true,
                axisLineColor: '#333',
                axisTickShow: true,
                axisTickColor: '#333',
                axisLabelShow: true,
                axisLabelColor: '#333',
                splitLineShow: true,
                splitLineColor: [
                    '#ccc',
                ],
                splitAreaShow: false,
                splitAreaColor: [
                    'rgba(250,250,250,0.3)',
                    'rgba(200,200,200,0.3)',
                ],
            },
        ],
        axisSeperateSetting: false,
        toolboxColor: '#999',
        toolboxEmphasisColor: '#666',
        tooltipAxisColor: '#ccc',
        tooltipAxisWidth: 1,
        timelineLineColor: '#8fd3e8',
        timelineLineWidth: 1,
        timelineItemColor: '#8fd3e8',
        timelineItemColorE: '#8fd3e8',
        timelineCheckColor: '#8fd3e8',
        timelineCheckBorderColor: 'rgba(138,124,168,0.37)',
        timelineItemBorderWidth: 1,
        timelineControlColor: '#8fd3e8',
        timelineControlBorderColor: '#8fd3e8',
        timelineControlBorderWidth: 0.5,
        timelineLabelColor: '#8fd3e8',
        datazoomBackgroundColor: 'rgba(0,0,0,0)',
        datazoomDataColor: 'rgba(255,255,255,0.3)',
        datazoomFillColor: 'rgba(167,183,204,0.4)',
        datazoomHandleColor: '#a7b7cc',
        datazoomHandleWidth: '100',
        datazoomLabelColor: '#333',
    },
};
