Posts = new orion.collection('posts', {
  singularName: '文章',
  pluralName: 'posts',
  title: '文章',
  link: {
    title: '文章'
  },
  tabular: {
    columns: [
      { data: "title", title: "标题" },
      orion.attributeColumn('file', 'image', '封面图'),
      orion.attributeColumn('summernote', 'content', '内容', { orderable: true }),
      orion.attributeColumn('createdAt', 'createdAt', '时间'),
      orion.attributeColumn('createdBy', 'createdBy', '创建人')
    ]
  }
});

Posts.attachSchema(new SimpleSchema({
  title: {
    label: '标题',
    type: String
  },
  image: orion.attribute('file', {
      label: '封面图',
      type: String,
      optional: true,
      autoform: {
        afFieldInput: {
          type: "image"
        }
      }
  }),
  content: orion.attribute('summernote', {
      label: '内容'
  }),
  createdAt: orion.attribute('createdAt'),
  createdBy: orion.attribute('createdBy')
}));

Videos = new orion.collection('videos', {
  singularName: '视频',
  pluralName: 'videos',
  title: '视频',
  link: {
    title: '视频'
  },
  tabular: {
    columns: [
      { data: "title", title: "标题" },
      orion.attributeColumn('file', 'image_file', '封面图'),
      orion.attributeColumn('file', 'video_file', '视频文件'),
      orion.attributeColumn('summernote', 'description', '描述', { orderable: true }),
      orion.attributeColumn('createdAt', 'createdAt', '时间'),
      orion.attributeColumn('createdBy', 'createdBy', '创建人')
    ]
  }
});

Videos.attachSchema(new SimpleSchema({
  title: {
    label: '标题',
    type: String
  },
  image_file: orion.attribute('file', {
      label: '封面图',
      optional: true
  }),
  video_file: orion.attribute('file', {
      label: '视频文件',
      optional: true
  }),
  description: orion.attribute('summernote', {
      label: '描述'
  }),
  createdAt: orion.attribute('createdAt'),
  createdBy: orion.attribute('createdBy')
}));

Jobs = new orion.collection('jobs', {
  singularName: '职位',
  pluralName: 'jobs',
  title: '职位',
  link: {
    title: '职位'
  },
  tabular: {
    columns: [
      { data: "title", title: "职位名称" },
      { data: "department", title: "部门" },
      { data: "location", title: "工作地点" },
      orion.attributeColumn('summernote', 'description', '描述', { orderable: true }),
      orion.attributeColumn('createdAt', 'createdAt', '时间'),
      orion.attributeColumn('createdBy', 'createdBy', '创建人')
    ]
  }
});

Jobs.attachSchema(new SimpleSchema({
  title: {
    label: '职位名称',
    type: String
  },
  department: {
    label: '部门',
    type: String
  },
  location: {
    label: '工作地点',
    type: String
  },
  description: orion.attribute('summernote', {
      label: '描述'
  }),
  createdAt: orion.attribute('createdAt'),
  createdBy: orion.attribute('createdBy')
}));

Links = new orion.collection('links', {
  singularName: '链接',
  pluralName: 'links',
  title: '链接',
  link: {
    title: '链接'
  },
  tabular: {
    columns: [
      { data: "title", title: "标题" },
      { data: "url", title: "地址" },
      orion.attributeColumn('summernote', 'description', '描述', { orderable: true }),
      orion.attributeColumn('createdAt', 'createdAt', '时间'),
      orion.attributeColumn('createdBy', 'createdBy', '用户')
    ]
  }
});

Links.attachSchema(new SimpleSchema({
  title: {
    label: '标题',
    type: String
  },
  url: {
    label: '地址',
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "url"
      }
    }
  },
  description: {
    label: '描述',
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "textarea"
      }
    }
  },
  createdAt: orion.attribute('createdAt'),
  createdBy: orion.attribute('createdBy')
}));