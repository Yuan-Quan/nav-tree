export interface ITreeDataItem {
  key: string;
  label: string;
  nodetype: string; 
  nodes?: ITreeDataItem[];
  url?: string;
}

export const treeDataRoot = {
  key: 'root',
  label: "三.全过程造价咨询管理",
  nodetype: "category",
  url: '',
  nodes: [
    {
      key: '1',
      label: "台账使用说明",
      nodetype: "file",
      url: '/magicflu/html/form/appController.jsp?appLabel=%E4%B8%89.%E5%85%A8%E8%BF%87%E7%A8%8B%E9%80%A0%E4%BB%B7%E5%92%A8%E8%AF%A2%E7%AE%A1%E7%90%86&nodeLabel=%E5%8F%B0%E8%B4%A6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E&nodeId=18&spaceId=f416a565-6aa6-414d-bcde-70a877f7c84a&appId=2b07706b-022d-400c-b2af-4cab8dc27dd7'
    },
    {
      key: '2',
      label: '项目概况',
      nodetype: "file",
      url: '/magicflu/html/form/appController.jsp?appLabel=%E4%B8%89.%E5%85%A8%E8%BF%87%E7%A8%8B%E9%80%A0%E4%BB%B7%E5%92%A8%E8%AF%A2%E7%AE%A1%E7%90%86&nodeLabel=%E9%A1%B9%E7%9B%AE%E6%A6%82%E5%86%B5&nodeId=265&spaceId=f416a565-6aa6-414d-bcde-70a877f7c84a&appId=2b07706b-022d-400c-b2af-4cab8dc27dd7'
    },
    {
      key: '3',
      label: '咨询合同',
      nodetype: "file",
      url: '/magicflu/html/form/appController.jsp?appLabel=%E4%B8%89.%E5%85%A8%E8%BF%87%E7%A8%8B%E9%80%A0%E4%BB%B7%E5%92%A8%E8%AF%A2%E7%AE%A1%E7%90%86&nodeLabel=%E5%92%A8%E8%AF%A2%E5%90%88%E5%90%8C&nodeId=222&spaceId=f416a565-6aa6-414d-bcde-70a877f7c84a&appId=2b07706b-022d-400c-b2af-4cab8dc27dd7'
    },
    {
      key: '4',
      label: '戊爱小区（龙熙一号项目）',
      nodetype: "category",
      url: '/magicflu/html/form/appController.jsp?appLabel=%E4%B8%89.%E5%85%A8%E8%BF%87%E7%A8%8B%E9%80%A0%E4%BB%B7%E5%92%A8%E8%AF%A2%E7%AE%A1%E7%90%86&nodeLabel=%E6%88%8A%E7%88%B1%E5%B0%8F%E5%8C%BA%EF%BC%88%E9%BE%99%E7%86%99%E4%B8%80%E5%8F%B7%E9%A1%B9%E7%9B%AE%EF%BC%89&nodeId=1&spaceId=f416a565-6aa6-414d-bcde-70a877f7c84a&appId=2b07706b-022d-400c-b2af-4cab8dc27dd7',
      nodes: [
        {
          key: '4.1',
          label: '项目概况',
          nodetype: "file",
          url: '/magicflu/html/form/appController.jsp?appLabel=%E4%B8%89.%E5%85%A8%E8%BF%87%E7%A8%8B%E9%80%A0%E4%BB%B7%E5%92%A8%E8%AF%A2%E7%AE%A1%E7%90%86&nodeLabel=%E9%A1%B9%E7%9B%AE%E6%A6%82%E5%86%B5&nodeId=12&spaceId=f416a565-6aa6-414d-bcde-70a877f7c84a&appId=2b07706b-022d-400c-b2af-4cab8dc27dd7'
        },
        {
          key: '4.2',
          label: '收发文登记',
          nodetype: "category",
          url: '/magicflu/html/form/appController.jsp?appLabel=%E4%B8%89.%E5%85%A8%E8%BF%87%E7%A8%8B%E9%80%A0%E4%BB%B7%E5%92%A8%E8%AF%A2%E7%AE%A1%E7%90%86&nodeLabel=%E6%94%B6%E5%8F%91%E6%96%87%E7%99%BB%E8%AE%B0&nodeId=6&spaceId=f416a565-6aa6-414d-bcde-70a877f7c84a&appId=2b07706b-022d-400c-b2af-4cab8dc27dd7',
          nodes: [
            {
              key: '4.2.1',
              label: '收文',
              nodetype: "file",
              url: '/magicflu/html/form/appController.jsp?appLabel=%E4%B8%89.%E5%85%A8%E8%BF%87%E7%A8%8B%E9%80%A0%E4%BB%B7%E5%92%A8%E8%AF%A2%E7%AE%A1%E7%90%86&nodeLabel=%E6%94%B6%E6%96%87&nodeId=194&spaceId=f416a565-6aa6-414d-bcde-70a877f7c84a&appId=2b07706b-022d-400c-b2af-4cab8dc27dd7'
            },
            {
              key: '4.2.2',
              label: '发文',
              nodetype: "file",
              url: '/magicflu/html/form/appController.jsp?appLabel=%E4%B8%89.%E5%85%A8%E8%BF%87%E7%A8%8B%E9%80%A0%E4%BB%B7%E5%92%A8%E8%AF%A2%E7%AE%A1%E7%90%86&nodeLabel=%E5%8F%91%E6%96%87&nodeId=195&spaceId=f416a565-6aa6-414d-bcde-70a877f7c84a&appId=2b07706b-022d-400c-b2af-4cab8dc27dd7'
            }
          ]
        },
        {
          key: '4.3',
          label: '施工合同管理',
          nodetype: 'category',
          url: '/magicflu/html/form/appController.jsp?appLabel=%E4%B8%89.%E5%85%A8%E8%BF%87%E7%A8%8B%E9%80%A0%E4%BB%B7%E5%92%A8%E8%AF%A2%E7%AE%A1%E7%90%86&nodeLabel=%E6%96%BD%E5%B7%A5%E5%90%88%E5%90%8C%E7%AE%A1%E7%90%86&nodeId=22&spaceId=f416a565-6aa6-414d-bcde-70a877f7c84a&appId=2b07706b-022d-400c-b2af-4cab8dc27dd7',
          nodes: [
            {
              key: '4.3.1',
              label: '合同台账统计（执行报表操作可刷新）',
              nodetype: 'file',
              url: ''
            }
          ]

        }
      ]
    }
  ]
};
