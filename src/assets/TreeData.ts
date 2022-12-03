export interface ITreeDataItem {
  key: string;
  label: string;
  nodetype: string; 
  nodes?: ITreeDataItem[];
}

export const treeDataRoot = {
  key: 'root',
  label: "Community",
  nodetype: "category", // custom props may be added to the objects
  nodes: [
    {
      key: '1',
      label: "Category-A",
      nodetype: "category",
      nodes: [
        {
          key: '2',
          label: "Category-A-SubCategory",
          nodetype: "category",
          nodes: [
            {
              key: '3',
              label: "Category-A-Subcategory-Forum",
              nodetype: "forum"
            },
            {
              key: '4',
              label: "Category-A-Subcategory-Blog",
              nodetype: "blog"
            },
            {
              key: '5',
              label: "Category-A-Subcategory-TKB",
              nodetype: "tkb"
            }
          ]
        }
      ]
    }
  ]
};
