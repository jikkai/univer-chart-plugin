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

export const CHART_THEME_CHALK = {
    version: 1,
    themeName: 'chalk',
    theme: {
        seriesCnt: '3',
        backgroundColor: 'rgba(41,52,65,1)',
        titleColor: '#ffffff',
        subtitleColor: '#dddddd',
        textColorShow: false,
        textColor: '#333',
        markTextColor: '#293441',
        color: [
            '#fc97af',
            '#87f7cf',
            '#f7f494',
            '#72ccff',
            '#f7c5a0',
            '#d4a4eb',
            '#d2f5a6',
            '#76f2f2',
        ],
        borderColor: '#ccc',
        borderWidth: 0,
        visualMapColor: [
            '#fc97af',
            '#87f7cf',
        ],
        legendTextColor: '#999999',
        kColor: '#fc97af',
        kColor0: 'transparent',
        kBorderColor: '#fc97af',
        kBorderColor0: '#87f7cf',
        kBorderWidth: '2',
        lineWidth: '3',
        symbolSize: '0',
        symbol: 'circle',
        symbolBorderWidth: '4',
        lineSmooth: true,
        graphLineWidth: '1',
        graphLineColor: '#ffffff',
        mapLabelColor: '#893448',
        mapLabelColorE: 'rgb(137,52,72)',
        mapBorderColor: '#999999',
        mapBorderColorE: '#eb8146',
        mapBorderWidth: 0.5,
        mapBorderWidthE: 1,
        mapAreaColor: '#f3f3f3',
        mapAreaColorE: 'rgba(255,178,72,1)',
        axes: [
            {
                type: 'all',
                name: '通用坐标轴',
                axisLineShow: true,
                axisLineColor: '#666666',
                axisTickShow: false,
                axisTickColor: '#333',
                axisLabelShow: true,
                axisLabelColor: '#aaaaaa',
                splitLineShow: false,
                splitLineColor: [
                    '#e6e6e6',
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
        toolboxColor: '#999999',
        toolboxEmphasisColor: '#666666',
        tooltipAxisColor: '#cccccc',
        tooltipAxisWidth: 1,
        timelineLineColor: '#87f7cf',
        timelineLineWidth: 1,
        timelineItemColor: '#87f7cf',
        timelineItemColorE: '#f7f494',
        timelineCheckColor: '#fc97af',
        timelineCheckBorderColor: 'rgba(252,151,175,0.3)',
        timelineItemBorderWidth: 1,
        timelineControlColor: '#87f7cf',
        timelineControlBorderColor: '#87f7cf',
        timelineControlBorderWidth: 0.5,
        timelineLabelColor: '#87f7cf',
        datazoomBackgroundColor: 'rgba(255,255,255,0)',
        datazoomDataColor: 'rgba(114,204,255,1)',
        datazoomFillColor: 'rgba(114,204,255,0.2)',
        datazoomHandleColor: '#72ccff',
        datazoomHandleWidth: '100',
        datazoomLabelColor: '#333333',
    },
};
