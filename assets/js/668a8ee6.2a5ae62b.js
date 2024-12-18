"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[513],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(7462),r=t(7294),l=t(6010),o=t(2466),i=t(6550),s=t(1980),u=t(7392),c=t(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[s,u]=f({queryString:t,groupId:a}),[d,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),y=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var y=t(2389);const g="tabList__CuJ",h="tabItem_LNqP";function v(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==i&&(d(n),s(a))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",h,o?.className,{"tabs__item--active":i===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function _(e){const n=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(v,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function x(e){const n=(0,y.Z)();return r.createElement(_,(0,a.Z)({key:String(n)},e))}},5877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=t(7462),r=(t(7294),t(3905)),l=t(4866),o=t(5162);const i={},s="Aerial",u={unversionedId:"extras/editor/aerial",id:"extras/editor/aerial",title:"Aerial",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/editor/aerial.md",sourceDirName:"extras/editor",slug:"/extras/editor/aerial",permalink:"/extras/editor/aerial",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/extras/editor/aerial.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DAP Neovim Lua Adapter",permalink:"/extras/dap/nlua"},next:{title:"Dial",permalink:"/extras/editor/dial"}},c={},d=[{value:"aerial.nvim",id:"aerialnvim",level:2},{value:"trouble.nvim <em>(optional)</em>",id:"troublenvim-optional",level:2},{value:"telescope.nvim <em>(optional)</em>",id:"telescopenvim-optional",level:2},{value:"edgy.nvim <em>(optional)</em>",id:"edgynvim-optional",level:2},{value:"lualine.nvim <em>(optional)</em>",id:"lualinenvim-optional",level:2}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aerial"},"Aerial"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,r.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,r.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,r.kt)("h2",{id:"aerialnvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/stevearc/aerial.nvim"},"aerial.nvim")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local icons = vim.deepcopy(LazyVim.config.icons.kinds)\n\n  -- HACK: fix lua\'s weird choice for `Package` for control\n  -- structures like if/else/for/etc.\n  icons.lua = { Package = icons.Control }\n\n  ---@type table<string, string[]>|false\n  local filter_kind = false\n  if LazyVim.config.kind_filter then\n    filter_kind = assert(vim.deepcopy(LazyVim.config.kind_filter))\n    filter_kind._ = filter_kind.default\n    filter_kind.default = nil\n  end\n\n  local opts = {\n    attach_mode = "global",\n    backends = { "lsp", "treesitter", "markdown", "man" },\n    show_guides = true,\n    layout = {\n      resize_to_content = false,\n      win_opts = {\n        winhl = "Normal:NormalFloat,FloatBorder:NormalFloat,SignColumn:SignColumnSB",\n        signcolumn = "yes",\n        statuscolumn = " ",\n      },\n    },\n    icons = icons,\n    filter_kind = filter_kind,\n    -- stylua: ignore\n    guides = {\n      mid_item   = "\u251c\u2574",\n      last_item  = "\u2514\u2574",\n      nested_top = "\u2502 ",\n      whitespace = "  ",\n    },\n  }\n  return opts\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "stevearc/aerial.nvim",\n  event = "LazyFile",\n  opts = function()\n    local icons = vim.deepcopy(LazyVim.config.icons.kinds)\n\n    -- HACK: fix lua\'s weird choice for `Package` for control\n    -- structures like if/else/for/etc.\n    icons.lua = { Package = icons.Control }\n\n    ---@type table<string, string[]>|false\n    local filter_kind = false\n    if LazyVim.config.kind_filter then\n      filter_kind = assert(vim.deepcopy(LazyVim.config.kind_filter))\n      filter_kind._ = filter_kind.default\n      filter_kind.default = nil\n    end\n\n    local opts = {\n      attach_mode = "global",\n      backends = { "lsp", "treesitter", "markdown", "man" },\n      show_guides = true,\n      layout = {\n        resize_to_content = false,\n        win_opts = {\n          winhl = "Normal:NormalFloat,FloatBorder:NormalFloat,SignColumn:SignColumnSB",\n          signcolumn = "yes",\n          statuscolumn = " ",\n        },\n      },\n      icons = icons,\n      filter_kind = filter_kind,\n      -- stylua: ignore\n      guides = {\n        mid_item   = "\u251c\u2574",\n        last_item  = "\u2514\u2574",\n        nested_top = "\u2502 ",\n        whitespace = "  ",\n      },\n    }\n    return opts\n  end,\n  keys = {\n    { "<leader>cs", "<cmd>AerialToggle<cr>", desc = "Aerial (Symbols)" },\n  },\n}\n')))),(0,r.kt)("h2",{id:"troublenvim-optional"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/folke/trouble.nvim"},"trouble.nvim")," ",(0,r.kt)("em",{parentName:"h2"},"(optional)")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/trouble.nvim",\n  optional = true,\n  keys = {\n    { "<leader>cs", false },\n  },\n}\n')))),(0,r.kt)("h2",{id:"telescopenvim-optional"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-telescope/telescope.nvim"},"telescope.nvim")," ",(0,r.kt)("em",{parentName:"h2"},"(optional)")),(0,r.kt)("p",null," Telescope integration"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  LazyVim.on_load("telescope.nvim", function()\n    require("telescope").load_extension("aerial")\n  end)\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-telescope/telescope.nvim",\n  optional = true,\n  opts = function()\n    LazyVim.on_load("telescope.nvim", function()\n      require("telescope").load_extension("aerial")\n    end)\n  end,\n  keys = {\n    {\n      "<leader>ss",\n      "<cmd>Telescope aerial<cr>",\n      desc = "Goto Symbol (Aerial)",\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"edgynvim-optional"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/folke/edgy.nvim"},"edgy.nvim")," ",(0,r.kt)("em",{parentName:"h2"},"(optional)")),(0,r.kt)("p",null," edgy integration"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  local edgy_idx = LazyVim.plugin.extra_idx("ui.edgy")\n  local aerial_idx = LazyVim.plugin.extra_idx("editor.aerial")\n\n  if edgy_idx and edgy_idx > aerial_idx then\n    LazyVim.warn("The `edgy.nvim` extra must be **imported** before the `aerial.nvim` extra to work properly.", {\n      title = "LazyVim",\n    })\n  end\n\n  opts.right = opts.right or {}\n  table.insert(opts.right, {\n    title = "Aerial",\n    ft = "aerial",\n    pinned = true,\n    open = "AerialOpen",\n  })\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/edgy.nvim",\n  optional = true,\n  opts = function(_, opts)\n    local edgy_idx = LazyVim.plugin.extra_idx("ui.edgy")\n    local aerial_idx = LazyVim.plugin.extra_idx("editor.aerial")\n\n    if edgy_idx and edgy_idx > aerial_idx then\n      LazyVim.warn("The `edgy.nvim` extra must be **imported** before the `aerial.nvim` extra to work properly.", {\n        title = "LazyVim",\n      })\n    end\n\n    opts.right = opts.right or {}\n    table.insert(opts.right, {\n      title = "Aerial",\n      ft = "aerial",\n      pinned = true,\n      open = "AerialOpen",\n    })\n  end,\n}\n')))),(0,r.kt)("h2",{id:"lualinenvim-optional"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-lualine/lualine.nvim"},"lualine.nvim")," ",(0,r.kt)("em",{parentName:"h2"},"(optional)")),(0,r.kt)("p",null," lualine integration"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  if not vim.g.trouble_lualine then\n    table.insert(opts.sections.lualine_c, {\n      "aerial",\n      sep = " ", -- separator between symbols\n      sep_icon = "", -- separator between icon and symbol\n\n      -- The number of symbols to render top-down. In order to render only \'N\' last\n      -- symbols, negative numbers may be supplied. For instance, \'depth = -1\' can\n      -- be used in order to render only current symbol.\n      depth = 5,\n\n      -- When \'dense\' mode is on, icons are not rendered near their symbols. Only\n      -- a single icon that represents the kind of current symbol is rendered at\n      -- the beginning of status line.\n      dense = false,\n\n      -- The separator to be used to separate symbols in dense mode.\n      dense_sep = ".",\n\n      -- Color the symbol icons.\n      colored = true,\n    })\n  end\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-lualine/lualine.nvim",\n  optional = true,\n  opts = function(_, opts)\n    if not vim.g.trouble_lualine then\n      table.insert(opts.sections.lualine_c, {\n        "aerial",\n        sep = " ", -- separator between symbols\n        sep_icon = "", -- separator between icon and symbol\n\n        -- The number of symbols to render top-down. In order to render only \'N\' last\n        -- symbols, negative numbers may be supplied. For instance, \'depth = -1\' can\n        -- be used in order to render only current symbol.\n        depth = 5,\n\n        -- When \'dense\' mode is on, icons are not rendered near their symbols. Only\n        -- a single icon that represents the kind of current symbol is rendered at\n        -- the beginning of status line.\n        dense = false,\n\n        -- The separator to be used to separate symbols in dense mode.\n        dense_sep = ".",\n\n        -- Color the symbol icons.\n        colored = true,\n      })\n    end\n  end,\n}\n')))))}m.isMDXComponent=!0}}]);