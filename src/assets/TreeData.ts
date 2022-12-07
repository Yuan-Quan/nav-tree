export interface ITreeDataItem {
  key: string;
  label: string;
  nodetype: string; 
  nodes?: ITreeDataItem[];
  url?: string;
}

export const treeDataRoot = 
{
        "label": "三.全过程造价咨询管理",
        "key": "root",
        "url": "",
        "nodetype": "category",
        "nodes": [
            {
                "label": "NavTree_debug",
                "key": "266",
                "url": "",
                "nodetype": "file"
            },
            {
                "label": "台账使用说明",
                "key": "18",
                "url": "",
                "nodetype": "file"
            },
            {
                "label": "项目概况",
                "key": "265",
                "url": "",
                "nodetype": "file"
            },
            {
                "label": "咨询合同",
                "key": "222",
                "url": "",
                "nodetype": "file"
            },
            {
                "label": "戊爱小区（龙熙一号项目）",
                "key": "1",
                "url": "",
                "nodetype": "category",
                "nodes": [
                    {
                        "label": "项目概况",
                        "key": "12",
                        "url": "",
                        "nodetype": "file"
                    },
                    {
                        "label": "收发文登记",
                        "key": "6",
                        "url": "",
                        "nodetype": "category",
                        "nodes": [
                            {
                                "label": "收文",
                                "key": "194",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "发文",
                                "key": "195",
                                "url": "",
                                "nodetype": "file"
                            }
                        ]
                    },
                    {
                        "label": "图纸管理",
                        "key": "196",
                        "url": "",
                        "nodetype": "file"
                    },
                    {
                        "label": "施工合同管理",
                        "key": "22",
                        "url": "",
                        "nodetype": "category",
                        "nodes": [
                            {
                                "label": "合同台账统计（执行报表操作可刷新）",
                                "key": "157",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "施工合同台账",
                                "key": "7",
                                "url": "",
                                "nodetype": "category",
                                "nodes": [
                                    {
                                        "label": "A地块",
                                        "key": "159",
                                        "url": "",
                                        "nodetype": "category",
                                        "nodes": [
                                            {
                                                "label": "A地块跨期",
                                                "key": "178",
                                                "url": "",
                                                "nodetype": "file"
                                            },
                                            {
                                                "label": "A1地块",
                                                "key": "163",
                                                "url": "",
                                                "nodetype": "file"
                                            },
                                            {
                                                "label": "A2地块",
                                                "key": "164",
                                                "url": "",
                                                "nodetype": "file"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "B地块",
                                        "key": "160",
                                        "url": "",
                                        "nodetype": "file"
                                    },
                                    {
                                        "label": "C地块",
                                        "key": "161",
                                        "url": "",
                                        "nodetype": "file"
                                    },
                                    {
                                        "label": "D地块",
                                        "key": "162",
                                        "url": "",
                                        "nodetype": "file"
                                    },
                                    {
                                        "label": "BCD跨期",
                                        "key": "179",
                                        "url": "",
                                        "nodetype": "file"
                                    },
                                    {
                                        "label": "戊爱跨期",
                                        "key": "190",
                                        "url": "",
                                        "nodetype": "file"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "label": "询价台账",
                        "key": "169",
                        "url": "",
                        "nodetype": "file"
                    },
                    {
                        "label": "项目前期",
                        "key": "205",
                        "url": "",
                        "nodetype": "category",
                        "nodes": [
                            {
                                "label": "合约规划",
                                "key": "203",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "目标成本",
                                "key": "202",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "设计管理",
                                "key": "223",
                                "url": "",
                                "nodetype": "file"
                            }
                        ]
                    },
                    {
                        "label": "招标阶段",
                        "key": "206",
                        "url": "",
                        "nodetype": "category",
                        "nodes": [
                            {
                                "label": "招投标计划",
                                "key": "23",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "总包预算",
                                "key": "168",
                                "url": "",
                                "nodetype": "category",
                                "nodes": [
                                    {
                                        "label": "总包预算编审流程",
                                        "key": "263",
                                        "url": "",
                                        "nodetype": "file"
                                    },
                                    {
                                        "label": "总包预算编制",
                                        "key": "209",
                                        "url": "",
                                        "nodetype": "file"
                                    },
                                    {
                                        "label": "总包预算对量",
                                        "key": "166",
                                        "url": "",
                                        "nodetype": "file"
                                    },
                                    {
                                        "label": "总包预算二审",
                                        "key": "210",
                                        "url": "",
                                        "nodetype": "file"
                                    },
                                    {
                                        "label": "总包合同清单",
                                        "key": "165",
                                        "url": "",
                                        "nodetype": "file"
                                    }
                                ]
                            },
                            {
                                "label": "招投标及清标台帐",
                                "key": "13",
                                "url": "",
                                "nodetype": "category",
                                "nodes": [
                                    {
                                        "label": "清单控制价及清标审批流程",
                                        "key": "172",
                                        "url": "",
                                        "nodetype": "file"
                                    },
                                    {
                                        "label": "招投标及清标台账查询",
                                        "key": "173",
                                        "url": "",
                                        "nodetype": "file"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "label": "施工阶段",
                        "key": "207",
                        "url": "",
                        "nodetype": "category",
                        "nodes": [
                            {
                                "label": "测算台账",
                                "key": "11",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "进度款审核支付台账",
                                "key": "17",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "签证变更台账",
                                "key": "21",
                                "url": "",
                                "nodetype": "category",
                                "nodes": [
                                    {
                                        "label": "指令台账填报及审核流程",
                                        "key": "149",
                                        "url": "",
                                        "nodetype": "file"
                                    },
                                    {
                                        "label": "台账分期统计(执行报表操作)",
                                        "key": "155",
                                        "url": "",
                                        "nodetype": "file"
                                    },
                                    {
                                        "label": "台账分合同统计(执行报表操作)",
                                        "key": "215",
                                        "url": "",
                                        "nodetype": "file"
                                    },
                                    {
                                        "label": "指令台账查询",
                                        "key": "16",
                                        "url": "",
                                        "nodetype": "category",
                                        "nodes": [
                                            {
                                                "label": "A地块",
                                                "key": "140",
                                                "url": "",
                                                "nodetype": "category",
                                                "nodes": [
                                                    {
                                                        "label": "A1地块",
                                                        "key": "175",
                                                        "url": "",
                                                        "nodetype": "file"
                                                    },
                                                    {
                                                        "label": "A2地块",
                                                        "key": "176",
                                                        "url": "",
                                                        "nodetype": "file"
                                                    },
                                                    {
                                                        "label": "A地块跨期",
                                                        "key": "177",
                                                        "url": "",
                                                        "nodetype": "file"
                                                    }
                                                ]
                                            },
                                            {
                                                "label": "B地块",
                                                "key": "141",
                                                "url": "",
                                                "nodetype": "file"
                                            },
                                            {
                                                "label": "C地块",
                                                "key": "142",
                                                "url": "",
                                                "nodetype": "file"
                                            },
                                            {
                                                "label": "D地块",
                                                "key": "143",
                                                "url": "",
                                                "nodetype": "file"
                                            },
                                            {
                                                "label": "BCD跨期",
                                                "key": "180",
                                                "url": "",
                                                "nodetype": "file"
                                            },
                                            {
                                                "label": "戊爱跨期",
                                                "key": "189",
                                                "url": "",
                                                "nodetype": "file"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "约谈台账",
                                "key": "15",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "扣款台账",
                                "key": "20",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "无合同付款台账",
                                "key": "19",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "实测实量或巡场记录",
                                "key": "14",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "零星工作台账",
                                "key": "136",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "付款台账",
                                "key": "148",
                                "url": "",
                                "nodetype": "file"
                            }
                        ]
                    },
                    {
                        "label": "结算阶段",
                        "key": "208",
                        "url": "",
                        "nodetype": "category",
                        "nodes": [
                            {
                                "label": "结算台账填报及审核",
                                "key": "150",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "合同结算统计表",
                                "key": "156",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "结算台账",
                                "key": "8",
                                "url": "",
                                "nodetype": "file"
                            }
                        ]
                    },
                    {
                        "label": "项目后评估",
                        "key": "211",
                        "url": "",
                        "nodetype": "category",
                        "nodes": [
                            {
                                "label": "复盘报告",
                                "key": "213",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "项目指标",
                                "key": "204",
                                "url": "",
                                "nodetype": "file"
                            }
                        ]
                    },
                    {
                        "label": "咨询费结算",
                        "key": "212",
                        "url": "",
                        "nodetype": "category",
                        "nodes": [
                            {
                                "label": "咨询费支付台账",
                                "key": "24",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "提成支付台账",
                                "key": "25",
                                "url": "",
                                "nodetype": "file"
                            }
                        ]
                    },
                    {
                        "label": "工程进度展示",
                        "key": "224",
                        "url": "",
                        "nodetype": "file"
                    }
                ]
            },
            {
                "label": "水富市中医院(EPC)建设项目",
                "key": "227",
                "url": "",
                "nodetype": "category",
                "nodes": [
                    {
                        "label": "项目概况",
                        "key": "229",
                        "url": "",
                        "nodetype": "file"
                    },
                    {
                        "label": "往来函件",
                        "key": "228",
                        "url": "",
                        "nodetype": "file"
                    },
                    {
                        "label": "图纸管理",
                        "key": "258",
                        "url": "",
                        "nodetype": "file"
                    },
                    {
                        "label": "咨询合同",
                        "key": "230",
                        "url": "",
                        "nodetype": "file"
                    },
                    {
                        "label": "工程询价",
                        "key": "238",
                        "url": "",
                        "nodetype": "category",
                        "nodes": [
                            {
                                "label": "询价台账",
                                "key": "237",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "材料询价",
                                "key": "239",
                                "url": "",
                                "nodetype": "file"
                            }
                        ]
                    },
                    {
                        "label": "施工合同",
                        "key": "235",
                        "url": "",
                        "nodetype": "file"
                    },
                    {
                        "label": "测算及估算",
                        "key": "253",
                        "url": "",
                        "nodetype": "category",
                        "nodes": [
                            {
                                "label": "测算及估算编审流程",
                                "key": "252",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "测算及估算台账",
                                "key": "232",
                                "url": "",
                                "nodetype": "file"
                            }
                        ]
                    },
                    {
                        "label": "工程进度款",
                        "key": "257",
                        "url": "",
                        "nodetype": "category",
                        "nodes": [
                            {
                                "label": "进度款审批流程",
                                "key": "256",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "进度款审核台账",
                                "key": "254",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "进度款统计",
                                "key": "255",
                                "url": "",
                                "nodetype": "file"
                            }
                        ]
                    },
                    {
                        "label": "总包预算",
                        "key": "247",
                        "url": "",
                        "nodetype": "category",
                        "nodes": [
                            {
                                "label": "总包施工图预算编审",
                                "key": "262",
                                "url": "",
                                "nodetype": "category",
                                "nodes": [
                                    {
                                        "label": "总包施工图预算编审流程",
                                        "key": "248",
                                        "url": "",
                                        "nodetype": "file"
                                    },
                                    {
                                        "label": "总包施工图预算编制",
                                        "key": "260",
                                        "url": "",
                                        "nodetype": "file"
                                    }
                                ]
                            },
                            {
                                "label": "施工图预算一审",
                                "key": "249",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "施工图预算二审",
                                "key": "250",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "总包合同清单",
                                "key": "251",
                                "url": "",
                                "nodetype": "file"
                            }
                        ]
                    },
                    {
                        "label": "招投标及清标",
                        "key": "231",
                        "url": "",
                        "nodetype": "category",
                        "nodes": [
                            {
                                "label": "清单控制价录入及审核",
                                "key": "246",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "招标清单及控制价",
                                "key": "244",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "投标文件及清标",
                                "key": "245",
                                "url": "",
                                "nodetype": "file"
                            }
                        ]
                    },
                    {
                        "label": "签证变更",
                        "key": "236",
                        "url": "",
                        "nodetype": "category",
                        "nodes": [
                            {
                                "label": "签证变更录入及审核",
                                "key": "240",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "签证变更台账",
                                "key": "241",
                                "url": "",
                                "nodetype": "file"
                            }
                        ]
                    },
                    {
                        "label": "扣款台账",
                        "key": "264",
                        "url": "",
                        "nodetype": "file"
                    },
                    {
                        "label": "工程结算",
                        "key": "233",
                        "url": "",
                        "nodetype": "category",
                        "nodes": [
                            {
                                "label": "结算录入及审核",
                                "key": "242",
                                "url": "",
                                "nodetype": "file"
                            },
                            {
                                "label": "结算台账",
                                "key": "243",
                                "url": "",
                                "nodetype": "file"
                            }
                        ]
                    },
                    {
                        "label": "巡场和收方日志",
                        "key": "234",
                        "url": "",
                        "nodetype": "file"
                    }
                ]
            },
        ]
    }