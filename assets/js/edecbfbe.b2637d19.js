"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[9454],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var i=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=i.createContext({}),u=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=u(n.components);return i.createElement(s.Provider,{value:e},n.children)},d="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,s=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),d=u(t),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||r;return t?i.createElement(f,o(o({ref:e},c),{},{components:t})):i.createElement(f,o({ref:e},c))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[d]="string"==typeof n?n:a,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(n,e,t)=>{t.d(e,{Z:()=>o});var i=t(7294),a=t(6010);const r="tabItem_Ymn6";function o(n){let{children:e,hidden:t,className:o}=n;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,o),hidden:t},e)}},4866:(n,e,t)=>{t.d(e,{Z:()=>z});var i=t(7462),a=t(7294),r=t(6010),o=t(2466),l=t(6550),s=t(1980),u=t(7392),c=t(12);function d(n){return function(n){return a.Children.map(n,(n=>{if(!n||(0,a.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(n).map((n=>{let{props:{value:e,label:t,attributes:i,default:a}}=n;return{value:e,label:t,attributes:i,default:a}}))}function m(n){const{values:e,children:t}=n;return(0,a.useMemo)((()=>{const n=e??d(t);return function(n){const e=(0,u.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function p(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function f(n){let{queryString:e=!1,groupId:t}=n;const i=(0,l.k6)(),r=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,s._X)(r),(0,a.useCallback)((n=>{if(!r)return;const e=new URLSearchParams(i.location.search);e.set(r,n),i.replace({...i.location,search:e.toString()})}),[r,i])]}function g(n){const{defaultValue:e,queryString:t=!1,groupId:i}=n,r=m(n),[o,l]=(0,a.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const i=t.find((n=>n.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:e,tabValues:r}))),[s,u]=f({queryString:t,groupId:i}),[d,g]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[i,r]=(0,c.Nk)(t);return[i,(0,a.useCallback)((n=>{t&&r.set(n)}),[t,r])]}({groupId:i}),y=(()=>{const n=s??d;return p({value:n,tabValues:r})?n:null})();(0,a.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,a.useCallback)((n=>{if(!p({value:n,tabValues:r}))throw new Error(`Can't select invalid tab value=${n}`);l(n),u(n),g(n)}),[u,g,r]),tabValues:r}}var y=t(2389);const b="tabList__CuJ",v="tabItem_LNqP";function h(n){let{className:e,block:t,selectedValue:l,selectValue:s,tabValues:u}=n;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=n=>{const e=n.currentTarget,t=c.indexOf(e),i=u[t].value;i!==l&&(d(e),s(i))},p=n=>{let e=null;switch(n.key){case"Enter":m(n);break;case"ArrowRight":{const t=c.indexOf(n.currentTarget)+1;e=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(n.currentTarget)-1;e=c[t]??c[c.length-1];break}}e?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},u.map((n=>{let{value:e,label:t,attributes:o}=n;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,key:e,ref:n=>c.push(n),onKeyDown:p,onClick:m},o,{className:(0,r.Z)("tabs__item",v,o?.className,{"tabs__item--active":l===e})}),t??e)})))}function k(n){let{lazy:e,children:t,selectedValue:i}=n;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=r.find((n=>n.props.value===i));return n?(0,a.cloneElement)(n,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==i}))))}function _(n){const e=g(n);return a.createElement("div",{className:(0,r.Z)("tabs-container",b)},a.createElement(h,(0,i.Z)({},n,e)),a.createElement(k,(0,i.Z)({},n,e)))}function z(n){const e=(0,y.Z)();return a.createElement(_,(0,i.Z)({key:String(e)},n))}},2385:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var i=t(7462),a=(t(7294),t(3905)),r=t(4866),o=t(5162);const l={},s="UI",u={unversionedId:"plugins/ui",id:"plugins/ui",title:"UI",description:"nvim-notify",source:"@site/docs/plugins/ui.md",sourceDirName:"plugins",slug:"/plugins/ui",permalink:"/plugins/ui",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/plugins/ui.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TreeSitter",permalink:"/plugins/treesitter"},next:{title:"Util",permalink:"/plugins/util"}},c={},d=[{value:"nvim-notify",id:"nvim-notify",level:2},{value:"bufferline.nvim",id:"bufferlinenvim",level:2},{value:"lualine.nvim",id:"lualinenvim",level:2},{value:"indent-blankline.nvim",id:"indent-blanklinenvim",level:2},{value:"noice.nvim",id:"noicenvim",level:2},{value:"mini.icons",id:"miniicons",level:2},{value:"nui.nvim",id:"nuinvim",level:2},{value:"dashboard-nvim",id:"dashboard-nvim",level:2}],m={toc:d};function p(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ui"},"UI"),(0,a.kt)("h2",{id:"nvim-notify"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/rcarriga/nvim-notify"},"nvim-notify")),(0,a.kt)("p",null," Better ",(0,a.kt)("inlineCode",{parentName:"p"},"vim.notify()")),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  stages = "static",\n  timeout = 3000,\n  max_height = function()\n    return math.floor(vim.o.lines * 0.75)\n  end,\n  max_width = function()\n    return math.floor(vim.o.columns * 0.75)\n  end,\n  on_open = function(win)\n    vim.api.nvim_win_set_config(win, { zindex = 100 })\n  end,\n}\n'))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "rcarriga/nvim-notify",\n  keys = {\n    {\n      "<leader>un",\n      function()\n        require("notify").dismiss({ silent = true, pending = true })\n      end,\n      desc = "Dismiss All Notifications",\n    },\n  },\n  opts = {\n    stages = "static",\n    timeout = 3000,\n    max_height = function()\n      return math.floor(vim.o.lines * 0.75)\n    end,\n    max_width = function()\n      return math.floor(vim.o.columns * 0.75)\n    end,\n    on_open = function(win)\n      vim.api.nvim_win_set_config(win, { zindex = 100 })\n    end,\n  },\n  init = function()\n    -- when noice is not enabled, install notify on VeryLazy\n    if not LazyVim.has("noice.nvim") then\n      LazyVim.on_very_lazy(function()\n        vim.notify = require("notify")\n      end)\n    end\n  end,\n}\n')))),(0,a.kt)("h2",{id:"bufferlinenvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/akinsho/bufferline.nvim"},"bufferline.nvim")),(0,a.kt)("p",null," This is what powers LazyVim's fancy-looking\ntabs, which include filetype icons and close buttons."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  options = {\n    -- stylua: ignore\n    close_command = function(n) LazyVim.ui.bufremove(n) end,\n    -- stylua: ignore\n    right_mouse_command = function(n) LazyVim.ui.bufremove(n) end,\n    diagnostics = "nvim_lsp",\n    always_show_bufferline = false,\n    diagnostics_indicator = function(_, _, diag)\n      local icons = LazyVim.config.icons.diagnostics\n      local ret = (diag.error and icons.Error .. diag.error .. " " or "")\n        .. (diag.warning and icons.Warn .. diag.warning or "")\n      return vim.trim(ret)\n    end,\n    offsets = {\n      {\n        filetype = "neo-tree",\n        text = "Neo-tree",\n        highlight = "Directory",\n        text_align = "left",\n      },\n    },\n    ---@param opts bufferline.IconFetcherOpts\n    get_element_icon = function(opts)\n      return LazyVim.config.icons.ft[opts.filetype]\n    end,\n  },\n}\n'))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "akinsho/bufferline.nvim",\n  event = "VeryLazy",\n  keys = {\n    { "<leader>bp", "<Cmd>BufferLineTogglePin<CR>", desc = "Toggle Pin" },\n    { "<leader>bP", "<Cmd>BufferLineGroupClose ungrouped<CR>", desc = "Delete Non-Pinned Buffers" },\n    { "<leader>bo", "<Cmd>BufferLineCloseOthers<CR>", desc = "Delete Other Buffers" },\n    { "<leader>br", "<Cmd>BufferLineCloseRight<CR>", desc = "Delete Buffers to the Right" },\n    { "<leader>bl", "<Cmd>BufferLineCloseLeft<CR>", desc = "Delete Buffers to the Left" },\n    { "<S-h>", "<cmd>BufferLineCyclePrev<cr>", desc = "Prev Buffer" },\n    { "<S-l>", "<cmd>BufferLineCycleNext<cr>", desc = "Next Buffer" },\n    { "[b", "<cmd>BufferLineCyclePrev<cr>", desc = "Prev Buffer" },\n    { "]b", "<cmd>BufferLineCycleNext<cr>", desc = "Next Buffer" },\n    { "[B", "<cmd>BufferLineMovePrev<cr>", desc = "Move buffer prev" },\n    { "]B", "<cmd>BufferLineMoveNext<cr>", desc = "Move buffer next" },\n  },\n  opts = {\n    options = {\n      -- stylua: ignore\n      close_command = function(n) LazyVim.ui.bufremove(n) end,\n      -- stylua: ignore\n      right_mouse_command = function(n) LazyVim.ui.bufremove(n) end,\n      diagnostics = "nvim_lsp",\n      always_show_bufferline = false,\n      diagnostics_indicator = function(_, _, diag)\n        local icons = LazyVim.config.icons.diagnostics\n        local ret = (diag.error and icons.Error .. diag.error .. " " or "")\n          .. (diag.warning and icons.Warn .. diag.warning or "")\n        return vim.trim(ret)\n      end,\n      offsets = {\n        {\n          filetype = "neo-tree",\n          text = "Neo-tree",\n          highlight = "Directory",\n          text_align = "left",\n        },\n      },\n      ---@param opts bufferline.IconFetcherOpts\n      get_element_icon = function(opts)\n        return LazyVim.config.icons.ft[opts.filetype]\n      end,\n    },\n  },\n  config = function(_, opts)\n    require("bufferline").setup(opts)\n    -- Fix bufferline when restoring a session\n    vim.api.nvim_create_autocmd({ "BufAdd", "BufDelete" }, {\n      callback = function()\n        vim.schedule(function()\n          pcall(nvim_bufferline)\n        end)\n      end,\n    })\n  end,\n}\n')))),(0,a.kt)("h2",{id:"lualinenvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/nvim-lualine/lualine.nvim"},"lualine.nvim")),(0,a.kt)("p",null," statusline"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  -- PERF: we don\'t need this lualine require madness \ud83e\udd37\n  local lualine_require = require("lualine_require")\n  lualine_require.require = require\n\n  local icons = LazyVim.config.icons\n\n  vim.o.laststatus = vim.g.lualine_laststatus\n\n  local opts = {\n    options = {\n      theme = "auto",\n      globalstatus = vim.o.laststatus == 3,\n      disabled_filetypes = { statusline = { "dashboard", "alpha", "ministarter" } },\n    },\n    sections = {\n      lualine_a = { "mode" },\n      lualine_b = { "branch" },\n\n      lualine_c = {\n        LazyVim.lualine.root_dir(),\n        {\n          "diagnostics",\n          symbols = {\n            error = icons.diagnostics.Error,\n            warn = icons.diagnostics.Warn,\n            info = icons.diagnostics.Info,\n            hint = icons.diagnostics.Hint,\n          },\n        },\n        { "filetype", icon_only = true, separator = "", padding = { left = 1, right = 0 } },\n        { LazyVim.lualine.pretty_path() },\n      },\n      lualine_x = {\n        -- stylua: ignore\n        {\n          function() return require("noice").api.status.command.get() end,\n          cond = function() return package.loaded["noice"] and require("noice").api.status.command.has() end,\n          color = function() return LazyVim.ui.fg("Statement") end,\n        },\n        -- stylua: ignore\n        {\n          function() return require("noice").api.status.mode.get() end,\n          cond = function() return package.loaded["noice"] and require("noice").api.status.mode.has() end,\n          color = function() return LazyVim.ui.fg("Constant") end,\n        },\n        -- stylua: ignore\n        {\n          function() return "\uf46f  " .. require("dap").status() end,\n          cond = function() return package.loaded["dap"] and require("dap").status() ~= "" end,\n          color = function() return LazyVim.ui.fg("Debug") end,\n        },\n        -- stylua: ignore\n        {\n          require("lazy.status").updates,\n          cond = require("lazy.status").has_updates,\n          color = function() return LazyVim.ui.fg("Special") end,\n        },\n        {\n          "diff",\n          symbols = {\n            added = icons.git.added,\n            modified = icons.git.modified,\n            removed = icons.git.removed,\n          },\n          source = function()\n            local gitsigns = vim.b.gitsigns_status_dict\n            if gitsigns then\n              return {\n                added = gitsigns.added,\n                modified = gitsigns.changed,\n                removed = gitsigns.removed,\n              }\n            end\n          end,\n        },\n      },\n      lualine_y = {\n        { "progress", separator = " ", padding = { left = 1, right = 0 } },\n        { "location", padding = { left = 0, right = 1 } },\n      },\n      lualine_z = {\n        function()\n          return "\uf43a " .. os.date("%R")\n        end,\n      },\n    },\n    extensions = { "neo-tree", "lazy" },\n  }\n\n  -- do not add trouble symbols if aerial is enabled\n  if vim.g.trouble_lualine then\n    local trouble = require("trouble")\n    local symbols = trouble.statusline\n      and trouble.statusline({\n        mode = "symbols",\n        groups = {},\n        title = false,\n        filter = { range = true },\n        format = "{kind_icon}{symbol.name:Normal}",\n        hl_group = "lualine_c_normal",\n      })\n    table.insert(opts.sections.lualine_c, {\n      symbols and symbols.get,\n      cond = symbols and symbols.has,\n    })\n  end\n\n  return opts\nend\n'))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-lualine/lualine.nvim",\n  event = "VeryLazy",\n  init = function()\n    vim.g.lualine_laststatus = vim.o.laststatus\n    if vim.fn.argc(-1) > 0 then\n      -- set an empty statusline till lualine loads\n      vim.o.statusline = " "\n    else\n      -- hide the statusline on the starter page\n      vim.o.laststatus = 0\n    end\n  end,\n  opts = function()\n    -- PERF: we don\'t need this lualine require madness \ud83e\udd37\n    local lualine_require = require("lualine_require")\n    lualine_require.require = require\n\n    local icons = LazyVim.config.icons\n\n    vim.o.laststatus = vim.g.lualine_laststatus\n\n    local opts = {\n      options = {\n        theme = "auto",\n        globalstatus = vim.o.laststatus == 3,\n        disabled_filetypes = { statusline = { "dashboard", "alpha", "ministarter" } },\n      },\n      sections = {\n        lualine_a = { "mode" },\n        lualine_b = { "branch" },\n\n        lualine_c = {\n          LazyVim.lualine.root_dir(),\n          {\n            "diagnostics",\n            symbols = {\n              error = icons.diagnostics.Error,\n              warn = icons.diagnostics.Warn,\n              info = icons.diagnostics.Info,\n              hint = icons.diagnostics.Hint,\n            },\n          },\n          { "filetype", icon_only = true, separator = "", padding = { left = 1, right = 0 } },\n          { LazyVim.lualine.pretty_path() },\n        },\n        lualine_x = {\n          -- stylua: ignore\n          {\n            function() return require("noice").api.status.command.get() end,\n            cond = function() return package.loaded["noice"] and require("noice").api.status.command.has() end,\n            color = function() return LazyVim.ui.fg("Statement") end,\n          },\n          -- stylua: ignore\n          {\n            function() return require("noice").api.status.mode.get() end,\n            cond = function() return package.loaded["noice"] and require("noice").api.status.mode.has() end,\n            color = function() return LazyVim.ui.fg("Constant") end,\n          },\n          -- stylua: ignore\n          {\n            function() return "\uf46f  " .. require("dap").status() end,\n            cond = function() return package.loaded["dap"] and require("dap").status() ~= "" end,\n            color = function() return LazyVim.ui.fg("Debug") end,\n          },\n          -- stylua: ignore\n          {\n            require("lazy.status").updates,\n            cond = require("lazy.status").has_updates,\n            color = function() return LazyVim.ui.fg("Special") end,\n          },\n          {\n            "diff",\n            symbols = {\n              added = icons.git.added,\n              modified = icons.git.modified,\n              removed = icons.git.removed,\n            },\n            source = function()\n              local gitsigns = vim.b.gitsigns_status_dict\n              if gitsigns then\n                return {\n                  added = gitsigns.added,\n                  modified = gitsigns.changed,\n                  removed = gitsigns.removed,\n                }\n              end\n            end,\n          },\n        },\n        lualine_y = {\n          { "progress", separator = " ", padding = { left = 1, right = 0 } },\n          { "location", padding = { left = 0, right = 1 } },\n        },\n        lualine_z = {\n          function()\n            return "\uf43a " .. os.date("%R")\n          end,\n        },\n      },\n      extensions = { "neo-tree", "lazy" },\n    }\n\n    -- do not add trouble symbols if aerial is enabled\n    if vim.g.trouble_lualine then\n      local trouble = require("trouble")\n      local symbols = trouble.statusline\n        and trouble.statusline({\n          mode = "symbols",\n          groups = {},\n          title = false,\n          filter = { range = true },\n          format = "{kind_icon}{symbol.name:Normal}",\n          hl_group = "lualine_c_normal",\n        })\n      table.insert(opts.sections.lualine_c, {\n        symbols and symbols.get,\n        cond = symbols and symbols.has,\n      })\n    end\n\n    return opts\n  end,\n}\n')))),(0,a.kt)("h2",{id:"indent-blanklinenvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/lukas-reineke/indent-blankline.nvim"},"indent-blankline.nvim")),(0,a.kt)("p",null," indent guides for Neovim"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  indent = {\n    char = "\u2502",\n    tab_char = "\u2502",\n  },\n  scope = { show_start = false, show_end = false },\n  exclude = {\n    filetypes = {\n      "help",\n      "alpha",\n      "dashboard",\n      "neo-tree",\n      "Trouble",\n      "trouble",\n      "lazy",\n      "mason",\n      "notify",\n      "toggleterm",\n      "lazyterm",\n    },\n  },\n}\n'))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "lukas-reineke/indent-blankline.nvim",\n  event = "LazyFile",\n  opts = {\n    indent = {\n      char = "\u2502",\n      tab_char = "\u2502",\n    },\n    scope = { show_start = false, show_end = false },\n    exclude = {\n      filetypes = {\n        "help",\n        "alpha",\n        "dashboard",\n        "neo-tree",\n        "Trouble",\n        "trouble",\n        "lazy",\n        "mason",\n        "notify",\n        "toggleterm",\n        "lazyterm",\n      },\n    },\n  },\n  main = "ibl",\n}\n')))),(0,a.kt)("h2",{id:"noicenvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/folke/noice.nvim"},"noice.nvim")),(0,a.kt)("p",null," Highly experimental plugin that completely replaces the UI for messages, cmdline and the popupmenu."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  lsp = {\n    override = {\n      ["vim.lsp.util.convert_input_to_markdown_lines"] = true,\n      ["vim.lsp.util.stylize_markdown"] = true,\n      ["cmp.entry.get_documentation"] = true,\n    },\n  },\n  routes = {\n    {\n      filter = {\n        event = "msg_show",\n        any = {\n          { find = "%d+L, %d+B" },\n          { find = "; after #%d+" },\n          { find = "; before #%d+" },\n        },\n      },\n      view = "mini",\n    },\n  },\n  presets = {\n    bottom_search = true,\n    command_palette = true,\n    long_message_to_split = true,\n  },\n}\n'))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/noice.nvim",\n  event = "VeryLazy",\n  opts = {\n    lsp = {\n      override = {\n        ["vim.lsp.util.convert_input_to_markdown_lines"] = true,\n        ["vim.lsp.util.stylize_markdown"] = true,\n        ["cmp.entry.get_documentation"] = true,\n      },\n    },\n    routes = {\n      {\n        filter = {\n          event = "msg_show",\n          any = {\n            { find = "%d+L, %d+B" },\n            { find = "; after #%d+" },\n            { find = "; before #%d+" },\n          },\n        },\n        view = "mini",\n      },\n    },\n    presets = {\n      bottom_search = true,\n      command_palette = true,\n      long_message_to_split = true,\n    },\n  },\n  -- stylua: ignore\n  keys = {\n    { "<leader>sn", "", desc = "+noice"},\n    { "<S-Enter>", function() require("noice").redirect(vim.fn.getcmdline()) end, mode = "c", desc = "Redirect Cmdline" },\n    { "<leader>snl", function() require("noice").cmd("last") end, desc = "Noice Last Message" },\n    { "<leader>snh", function() require("noice").cmd("history") end, desc = "Noice History" },\n    { "<leader>sna", function() require("noice").cmd("all") end, desc = "Noice All" },\n    { "<leader>snd", function() require("noice").cmd("dismiss") end, desc = "Dismiss All" },\n    { "<leader>snt", function() require("noice").cmd("pick") end, desc = "Noice Picker (Telescope/FzfLua)" },\n    { "<c-f>", function() if not require("noice.lsp").scroll(4) then return "<c-f>" end end, silent = true, expr = true, desc = "Scroll Forward", mode = {"i", "n", "s"} },\n    { "<c-b>", function() if not require("noice.lsp").scroll(-4) then return "<c-b>" end end, silent = true, expr = true, desc = "Scroll Backward", mode = {"i", "n", "s"}},\n  },\n  config = function(_, opts)\n    -- HACK: noice shows messages from before it was enabled,\n    -- but this is not ideal when Lazy is installing plugins,\n    -- so clear the messages in this case.\n    if vim.o.filetype == "lazy" then\n      vim.cmd([[messages clear]])\n    end\n    require("noice").setup(opts)\n  end,\n}\n')))),(0,a.kt)("h2",{id:"miniicons"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.icons"},"mini.icons")),(0,a.kt)("p",null," icons"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.icons",\n  lazy = true,\n  opts = {},\n  init = function()\n    package.preload["nvim-web-devicons"] = function()\n      require("mini.icons").mock_nvim_web_devicons()\n      return package.loaded["nvim-web-devicons"]\n    end\n  end,\n}\n')))),(0,a.kt)("h2",{id:"nuinvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/MunifTanjim/nui.nvim"},"nui.nvim")),(0,a.kt)("p",null," ui components"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{ "MunifTanjim/nui.nvim", lazy = true }\n')))),(0,a.kt)("h2",{id:"dashboard-nvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/nvimdev/dashboard-nvim"},"dashboard-nvim")),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local logo = [[\n       \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557          Z\n       \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551      Z    \n       \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551  \u2588\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551   z       \n       \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2588\u2554\u255d    \u255a\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551 z         \n       \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551    \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551           \n       \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d     \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d     \u255a\u2550\u255d           \n  ]]\n\n  logo = string.rep("\\n", 8) .. logo .. "\\n\\n"\n\n  local opts = {\n    theme = "doom",\n    hide = {\n      -- this is taken care of by lualine\n      -- enabling this messes up the actual laststatus setting after loading a file\n      statusline = false,\n    },\n    config = {\n      header = vim.split(logo, "\\n"),\n      -- stylua: ignore\n      center = {\n        { action = \'lua LazyVim.pick()()\',                           desc = " Find File",       icon = "\uf002 ", key = "f" },\n        { action = "ene | startinsert",                              desc = " New File",        icon = "\uf15b ", key = "n" },\n        { action = \'lua LazyVim.pick("oldfiles")()\',                 desc = " Recent Files",    icon = "\uf0c5 ", key = "r" },\n        { action = \'lua LazyVim.pick("live_grep")()\',                desc = " Find Text",       icon = "\uf022 ", key = "g" },\n        { action = \'lua LazyVim.pick.config_files()()\',              desc = " Config",          icon = "\uf423 ", key = "c" },\n        { action = \'lua require("persistence").load()\',              desc = " Restore Session", icon = "\ue348 ", key = "s" },\n        { action = "LazyExtras",                                     desc = " Lazy Extras",     icon = "\uea8c ", key = "x" },\n        { action = "Lazy",                                           desc = " Lazy",            icon = "\udb81\udcb2 ", key = "l" },\n        { action = function() vim.api.nvim_input("<cmd>qa<cr>") end, desc = " Quit",            icon = "\uf426 ", key = "q" },\n      },\n      footer = function()\n        local stats = require("lazy").stats()\n        local ms = (math.floor(stats.startuptime * 100 + 0.5) / 100)\n        return { "\u26a1 Neovim loaded " .. stats.loaded .. "/" .. stats.count .. " plugins in " .. ms .. "ms" }\n      end,\n    },\n  }\n\n  for _, button in ipairs(opts.config.center) do\n    button.desc = button.desc .. string.rep(" ", 43 - #button.desc)\n    button.key_format = "  %s"\n  end\n\n  -- open dashboard after closing lazy\n  if vim.o.filetype == "lazy" then\n    vim.api.nvim_create_autocmd("WinClosed", {\n      pattern = tostring(vim.api.nvim_get_current_win()),\n      once = true,\n      callback = function()\n        vim.schedule(function()\n          vim.api.nvim_exec_autocmds("UIEnter", { group = "dashboard" })\n        end)\n      end,\n    })\n  end\n\n  return opts\nend\n'))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvimdev/dashboard-nvim",\n  lazy = false, -- As https://github.com/nvimdev/dashboard-nvim/pull/450, dashboard-nvim shouldn\'t be lazy-loaded to properly handle stdin.\n  opts = function()\n    local logo = [[\n         \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557          Z\n         \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551      Z    \n         \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551  \u2588\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551   z       \n         \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2588\u2554\u255d    \u255a\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551 z         \n         \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551    \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551           \n         \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d     \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d     \u255a\u2550\u255d           \n    ]]\n\n    logo = string.rep("\\n", 8) .. logo .. "\\n\\n"\n\n    local opts = {\n      theme = "doom",\n      hide = {\n        -- this is taken care of by lualine\n        -- enabling this messes up the actual laststatus setting after loading a file\n        statusline = false,\n      },\n      config = {\n        header = vim.split(logo, "\\n"),\n        -- stylua: ignore\n        center = {\n          { action = \'lua LazyVim.pick()()\',                           desc = " Find File",       icon = "\uf002 ", key = "f" },\n          { action = "ene | startinsert",                              desc = " New File",        icon = "\uf15b ", key = "n" },\n          { action = \'lua LazyVim.pick("oldfiles")()\',                 desc = " Recent Files",    icon = "\uf0c5 ", key = "r" },\n          { action = \'lua LazyVim.pick("live_grep")()\',                desc = " Find Text",       icon = "\uf022 ", key = "g" },\n          { action = \'lua LazyVim.pick.config_files()()\',              desc = " Config",          icon = "\uf423 ", key = "c" },\n          { action = \'lua require("persistence").load()\',              desc = " Restore Session", icon = "\ue348 ", key = "s" },\n          { action = "LazyExtras",                                     desc = " Lazy Extras",     icon = "\uea8c ", key = "x" },\n          { action = "Lazy",                                           desc = " Lazy",            icon = "\udb81\udcb2 ", key = "l" },\n          { action = function() vim.api.nvim_input("<cmd>qa<cr>") end, desc = " Quit",            icon = "\uf426 ", key = "q" },\n        },\n        footer = function()\n          local stats = require("lazy").stats()\n          local ms = (math.floor(stats.startuptime * 100 + 0.5) / 100)\n          return { "\u26a1 Neovim loaded " .. stats.loaded .. "/" .. stats.count .. " plugins in " .. ms .. "ms" }\n        end,\n      },\n    }\n\n    for _, button in ipairs(opts.config.center) do\n      button.desc = button.desc .. string.rep(" ", 43 - #button.desc)\n      button.key_format = "  %s"\n    end\n\n    -- open dashboard after closing lazy\n    if vim.o.filetype == "lazy" then\n      vim.api.nvim_create_autocmd("WinClosed", {\n        pattern = tostring(vim.api.nvim_get_current_win()),\n        once = true,\n        callback = function()\n          vim.schedule(function()\n            vim.api.nvim_exec_autocmds("UIEnter", { group = "dashboard" })\n          end)\n        end,\n      })\n    end\n\n    return opts\n  end,\n}\n')))))}p.isMDXComponent=!0}}]);