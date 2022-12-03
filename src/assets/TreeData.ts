export interface ITreeDataItem {
  key: string;
  label: string;
  nodetype: string; 
  nodes?: ITreeDataItem[];
  url?: string;
}

export const treeDataRoot = {
  key: 'root',
  label: "Community",
  nodetype: "category", // custom props may be added to the objects
  url: '',
  nodes: [
    {
      key: '1',
      label: "Category-A",
      nodetype: "category",
      url: '',
      nodes: [
        {
          key: '1.1',
          label: "SubCategory",
          nodetype: "category",
          url: '',
          nodes: [
            {
              key: '1.1.1',
              label: "Forum",
              nodetype: "forum",
              url: 'http://ljcost.com:999/magicflu/html/form/appController.jsp?appLabel=%E4%B8%89.%E5%85%A8%E8%BF%87%E7%A8%8B%E9%80%A0%E4%BB%B7%E5%92%A8%E8%AF%A2%E7%AE%A1%E7%90%86&nodeLabel=%E9%A1%B9%E7%9B%AE%E6%A6%82%E5%86%B5&nodeId=12&spaceId=f416a565-6aa6-414d-bcde-70a877f7c84a&appId=2b07706b-022d-400c-b2af-4cab8dc27dd7',
            },
            {
              key: '1.1.2',
              label: "Blog",
              nodetype: "blog",
              url: '',
            },
            {
              key: '1.1.3',
              label: "中国语",
              nodetype: "tkb",
              url: '',
            }
          ]
        }
      ]
    },
    {
      key: '2',
      label: "Category-B",
      nodetype: "category",
      url: '',
      nodes: [
        {
          key: '2.1',
          label: "SubCategory",
          nodetype: "category",
          url: '',
          nodes: [
            {
              key: '2.1.1',
              label: "Forum",
              nodetype: "forum",
              url: 'http://ljcost.com:999/magicflu/html/form/appController.jsp?appLabel=%E4%B8%89.%E5%85%A8%E8%BF%87%E7%A8%8B%E9%80%A0%E4%BB%B7%E5%92%A8%E8%AF%A2%E7%AE%A1%E7%90%86&nodeLabel=%E9%A1%B9%E7%9B%AE%E6%A6%82%E5%86%B5&nodeId=12&spaceId=f416a565-6aa6-414d-bcde-70a877f7c84a&appId=2b07706b-022d-400c-b2af-4cab8dc27dd7',
            },
            {
              key: '2.1.2',
              label: "Blog",
              nodetype: "blog",
              url: '',
            },
            {
              key: '2.1.3',
              label: "TKB",
              nodetype: "tkb",
              url: '',
            }
          ]
        }
      ]
    }
  ]
};
