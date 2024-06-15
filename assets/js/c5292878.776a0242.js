"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[9536],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(7294),i=t(6010);const o="tabItem_Ymn6";function a(e){let{children:n,hidden:t,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,a),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7462),i=t(7294),o=t(6010),a=t(2466),l=t(6550),u=t(1980),s=t(7392),c=t(12);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}function f(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(o),(0,i.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=f(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,s]=m({queryString:t,groupId:r}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Nk)(t);return[r,(0,i.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=u??p;return d({value:e,tabValues:o})?e:null})();(0,i.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var g=t(2389);const h="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:n,block:t,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,a.o5)(),f=e=>{const n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==l&&(p(n),u(r))},d=e=>{let n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:a}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:d,onClick:f},a,{className:(0,o.Z)("tabs__item",y,a?.className,{"tabs__item--active":l===n})}),t??n)})))}function w(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function _(e){const n=b(e);return i.createElement("div",{className:(0,o.Z)("tabs-container",h)},i.createElement(v,(0,r.Z)({},e,n)),i.createElement(w,(0,r.Z)({},e,n)))}function k(e){const n=(0,g.Z)();return i.createElement(_,(0,r.Z)({key:String(n)},e))}},623:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(7462),i=(t(7294),t(3905)),o=t(4866),a=t(5162);const l={},u="edgy.nvim",s={unversionedId:"extras/ui/edgy",id:"extras/ui/edgy",title:"edgy.nvim",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/ui/edgy.md",sourceDirName:"extras/ui",slug:"/extras/ui/edgy",permalink:"/extras/ui/edgy",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/extras/ui/edgy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Alpha",permalink:"/extras/ui/alpha"},next:{title:"Mini Animate",permalink:"/extras/ui/mini-animate"}},c={},p=[{value:"edgy.nvim",id:"edgynvim-1",level:2},{value:"telescope.nvim <em>(optional)</em>",id:"telescopenvim-optional",level:2},{value:"neo-tree.nvim <em>(optional)</em>",id:"neo-treenvim-optional",level:2},{value:"bufferline.nvim <em>(optional)</em>",id:"bufferlinenvim-optional",level:2}],f={toc:p};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"edgynvim"},"edgy.nvim"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,i.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Alternatively, you can add it to your ",(0,i.kt)("code",null,"lazy.nvim")," imports"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.ui.edgy" },\n    { import = "plugins" },\n  },\n})\n'))),(0,i.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,i.kt)("h2",{id:"edgynvim-1"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/folke/edgy.nvim"},"edgy.nvim")),(0,i.kt)("p",null," edgy"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local opts = {\n    bottom = {\n      {\n        ft = "toggleterm",\n        size = { height = 0.4 },\n        filter = function(buf, win)\n          return vim.api.nvim_win_get_config(win).relative == ""\n        end,\n      },\n      {\n        ft = "noice",\n        size = { height = 0.4 },\n        filter = function(buf, win)\n          return vim.api.nvim_win_get_config(win).relative == ""\n        end,\n      },\n      {\n        ft = "lazyterm",\n        title = "LazyTerm",\n        size = { height = 0.4 },\n        filter = function(buf)\n          return not vim.b[buf].lazyterm_cmd\n        end,\n      },\n      "Trouble",\n      { ft = "qf", title = "QuickFix" },\n      {\n        ft = "help",\n        size = { height = 20 },\n        -- don\'t open help files in edgy that we\'re editing\n        filter = function(buf)\n          return vim.bo[buf].buftype == "help"\n        end,\n      },\n      { title = "Spectre", ft = "spectre_panel", size = { height = 0.4 } },\n      { title = "Neotest Output", ft = "neotest-output-panel", size = { height = 15 } },\n    },\n    left = {\n      {\n        title = "Neo-Tree",\n        ft = "neo-tree",\n        filter = function(buf)\n          return vim.b[buf].neo_tree_source == "filesystem"\n        end,\n        pinned = true,\n        open = function()\n          require("neo-tree.command").execute({ dir = LazyVim.root() })\n        end,\n        size = { height = 0.5 },\n      },\n      { title = "Neotest Summary", ft = "neotest-summary" },\n      {\n        title = "Neo-Tree Other",\n        ft = "neo-tree",\n        filter = function(buf)\n          return vim.b[buf].neo_tree_source ~= nil\n        end,\n      },\n      -- "neo-tree",\n    },\n    keys = {\n      -- increase width\n      ["<c-Right>"] = function(win)\n        win:resize("width", 2)\n      end,\n      -- decrease width\n      ["<c-Left>"] = function(win)\n        win:resize("width", -2)\n      end,\n      -- increase height\n      ["<c-Up>"] = function(win)\n        win:resize("height", 2)\n      end,\n      -- decrease height\n      ["<c-Down>"] = function(win)\n        win:resize("height", -2)\n      end,\n    },\n  }\n\n  -- only add neo-tree sources if they are enabled in config\n  local neotree_opts = LazyVim.opts("neo-tree.nvim")\n  local neotree_sources = { buffers = "top", git_status = "right" }\n\n  for source, pos in pairs(neotree_sources) do\n    if vim.list_contains(neotree_opts.sources, source) then\n      table.insert(opts.left, 3, {\n        title = "Neo-Tree " .. source:gsub("_", " "),\n        ft = "neo-tree",\n        filter = function(buf)\n          return vim.b[buf].neo_tree_source == source\n        end,\n        pinned = true,\n        open = "Neotree position=" .. pos .. " " .. source,\n      })\n    end\n  end\n\n  for _, pos in ipairs({ "top", "bottom", "left", "right" }) do\n    opts[pos] = opts[pos] or {}\n    table.insert(opts[pos], {\n      ft = "trouble",\n      filter = function(_buf, win)\n        return vim.w[win].trouble\n          and vim.w[win].trouble.position == pos\n          and vim.w[win].trouble.type == "split"\n          and vim.w[win].trouble.relative == "editor"\n          and not vim.w[win].trouble_preview\n      end,\n    })\n  end\n  return opts\nend\n'))),(0,i.kt)(a.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/edgy.nvim",\n  event = "VeryLazy",\n  keys = {\n    {\n      "<leader>ue",\n      function()\n        require("edgy").toggle()\n      end,\n      desc = "Edgy Toggle",\n    },\n    -- stylua: ignore\n    { "<leader>uE", function() require("edgy").select() end, desc = "Edgy Select Window" },\n  },\n  opts = function()\n    local opts = {\n      bottom = {\n        {\n          ft = "toggleterm",\n          size = { height = 0.4 },\n          filter = function(buf, win)\n            return vim.api.nvim_win_get_config(win).relative == ""\n          end,\n        },\n        {\n          ft = "noice",\n          size = { height = 0.4 },\n          filter = function(buf, win)\n            return vim.api.nvim_win_get_config(win).relative == ""\n          end,\n        },\n        {\n          ft = "lazyterm",\n          title = "LazyTerm",\n          size = { height = 0.4 },\n          filter = function(buf)\n            return not vim.b[buf].lazyterm_cmd\n          end,\n        },\n        "Trouble",\n        { ft = "qf", title = "QuickFix" },\n        {\n          ft = "help",\n          size = { height = 20 },\n          -- don\'t open help files in edgy that we\'re editing\n          filter = function(buf)\n            return vim.bo[buf].buftype == "help"\n          end,\n        },\n        { title = "Spectre", ft = "spectre_panel", size = { height = 0.4 } },\n        { title = "Neotest Output", ft = "neotest-output-panel", size = { height = 15 } },\n      },\n      left = {\n        {\n          title = "Neo-Tree",\n          ft = "neo-tree",\n          filter = function(buf)\n            return vim.b[buf].neo_tree_source == "filesystem"\n          end,\n          pinned = true,\n          open = function()\n            require("neo-tree.command").execute({ dir = LazyVim.root() })\n          end,\n          size = { height = 0.5 },\n        },\n        { title = "Neotest Summary", ft = "neotest-summary" },\n        {\n          title = "Neo-Tree Other",\n          ft = "neo-tree",\n          filter = function(buf)\n            return vim.b[buf].neo_tree_source ~= nil\n          end,\n        },\n        -- "neo-tree",\n      },\n      keys = {\n        -- increase width\n        ["<c-Right>"] = function(win)\n          win:resize("width", 2)\n        end,\n        -- decrease width\n        ["<c-Left>"] = function(win)\n          win:resize("width", -2)\n        end,\n        -- increase height\n        ["<c-Up>"] = function(win)\n          win:resize("height", 2)\n        end,\n        -- decrease height\n        ["<c-Down>"] = function(win)\n          win:resize("height", -2)\n        end,\n      },\n    }\n\n    -- only add neo-tree sources if they are enabled in config\n    local neotree_opts = LazyVim.opts("neo-tree.nvim")\n    local neotree_sources = { buffers = "top", git_status = "right" }\n\n    for source, pos in pairs(neotree_sources) do\n      if vim.list_contains(neotree_opts.sources, source) then\n        table.insert(opts.left, 3, {\n          title = "Neo-Tree " .. source:gsub("_", " "),\n          ft = "neo-tree",\n          filter = function(buf)\n            return vim.b[buf].neo_tree_source == source\n          end,\n          pinned = true,\n          open = "Neotree position=" .. pos .. " " .. source,\n        })\n      end\n    end\n\n    for _, pos in ipairs({ "top", "bottom", "left", "right" }) do\n      opts[pos] = opts[pos] or {}\n      table.insert(opts[pos], {\n        ft = "trouble",\n        filter = function(_buf, win)\n          return vim.w[win].trouble\n            and vim.w[win].trouble.position == pos\n            and vim.w[win].trouble.type == "split"\n            and vim.w[win].trouble.relative == "editor"\n            and not vim.w[win].trouble_preview\n        end,\n      })\n    end\n    return opts\n  end,\n}\n')))),(0,i.kt)("h2",{id:"telescopenvim-optional"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/nvim-telescope/telescope.nvim"},"telescope.nvim")," ",(0,i.kt)("em",{parentName:"h2"},"(optional)")),(0,i.kt)("p",null," use edgy's selection window"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  defaults = {\n    get_selection_window = function()\n      require("edgy").goto_main()\n      return 0\n    end,\n  },\n}\n'))),(0,i.kt)(a.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-telescope/telescope.nvim",\n  optional = true,\n  opts = {\n    defaults = {\n      get_selection_window = function()\n        require("edgy").goto_main()\n        return 0\n      end,\n    },\n  },\n}\n')))),(0,i.kt)("h2",{id:"neo-treenvim-optional"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/nvim-neo-tree/neo-tree.nvim"},"neo-tree.nvim")," ",(0,i.kt)("em",{parentName:"h2"},"(optional)")),(0,i.kt)("p",null," prevent neo-tree from opening files in edgy windows"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  opts.open_files_do_not_replace_types = opts.open_files_do_not_replace_types\n    or { "terminal", "Trouble", "qf", "Outline", "trouble" }\n  table.insert(opts.open_files_do_not_replace_types, "edgy")\nend\n'))),(0,i.kt)(a.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-neo-tree/neo-tree.nvim",\n  optional = true,\n  opts = function(_, opts)\n    opts.open_files_do_not_replace_types = opts.open_files_do_not_replace_types\n      or { "terminal", "Trouble", "qf", "Outline", "trouble" }\n    table.insert(opts.open_files_do_not_replace_types, "edgy")\n  end,\n}\n')))),(0,i.kt)("h2",{id:"bufferlinenvim-optional"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/akinsho/bufferline.nvim"},"bufferline.nvim")," ",(0,i.kt)("em",{parentName:"h2"},"(optional)")),(0,i.kt)("p",null," Fix bufferline offsets when edgy is loaded"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local Offset = require("bufferline.offset")\n  if not Offset.edgy then\n    local get = Offset.get\n    Offset.get = function()\n      if package.loaded.edgy then\n        local layout = require("edgy.config").layout\n        local ret = { left = "", left_size = 0, right = "", right_size = 0 }\n        for _, pos in ipairs({ "left", "right" }) do\n          local sb = layout[pos]\n          if sb and #sb.wins > 0 then\n            local title = " Sidebar" .. string.rep(" ", sb.bounds.width - 8)\n            ret[pos] = "%#EdgyTitle#" .. title .. "%*" .. "%#WinSeparator#\u2502%*"\n            ret[pos .. "_size"] = sb.bounds.width\n          end\n        end\n        ret.total_size = ret.left_size + ret.right_size\n        if ret.total_size > 0 then\n          return ret\n        end\n      end\n      return get()\n    end\n    Offset.edgy = true\n  end\nend\n'))),(0,i.kt)(a.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "akinsho/bufferline.nvim",\n  optional = true,\n  opts = function()\n    local Offset = require("bufferline.offset")\n    if not Offset.edgy then\n      local get = Offset.get\n      Offset.get = function()\n        if package.loaded.edgy then\n          local layout = require("edgy.config").layout\n          local ret = { left = "", left_size = 0, right = "", right_size = 0 }\n          for _, pos in ipairs({ "left", "right" }) do\n            local sb = layout[pos]\n            if sb and #sb.wins > 0 then\n              local title = " Sidebar" .. string.rep(" ", sb.bounds.width - 8)\n              ret[pos] = "%#EdgyTitle#" .. title .. "%*" .. "%#WinSeparator#\u2502%*"\n              ret[pos .. "_size"] = sb.bounds.width\n            end\n          end\n          ret.total_size = ret.left_size + ret.right_size\n          if ret.total_size > 0 then\n            return ret\n          end\n        end\n        return get()\n      end\n      Offset.edgy = true\n    end\n  end,\n}\n')))))}d.isMDXComponent=!0}}]);