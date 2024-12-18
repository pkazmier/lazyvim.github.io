"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[1432],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),p=r,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(6010);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7462),r=t(7294),o=t(6010),i=t(2466),l=t(6550),s=t(1980),c=t(7392),u=t(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[s,c]=f({queryString:t,groupId:a}),[d,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),y=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var y=t(2389);const v="tabList__CuJ",h="tabItem_LNqP";function g(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const n=e.currentTarget,t=u.indexOf(n),a=c[t].value;a!==l&&(d(n),s(a))},p=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>u.push(e),onKeyDown:p,onClick:m},i,{className:(0,o.Z)("tabs__item",h,i?.className,{"tabs__item--active":l===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function x(e){const n=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v)},r.createElement(g,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function w(e){const n=(0,y.Z)();return r.createElement(x,(0,a.Z)({key:String(n)},e))}},5179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(7462),r=(t(7294),t(3905)),o=t(4866),i=t(5162);const l={},s="Dashboard-nvim",c={unversionedId:"extras/ui/dashboard-nvim",id:"extras/ui/dashboard-nvim",title:"Dashboard-nvim",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/ui/dashboard-nvim.md",sourceDirName:"extras/ui",slug:"/extras/ui/dashboard-nvim",permalink:"/extras/ui/dashboard-nvim",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/extras/ui/dashboard-nvim.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Alpha",permalink:"/extras/ui/alpha"},next:{title:"edgy.nvim",permalink:"/extras/ui/edgy"}},u={},d=[{value:"snacks.nvim",id:"snacksnvim",level:2},{value:"dashboard-nvim",id:"dashboard-nvim-1",level:2}],m={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dashboard-nvim"},(0,r.kt)("inlineCode",{parentName:"h1"},"Dashboard-nvim")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,r.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,r.kt)("p",null,"lazyvim.plugins.extras.ui.dashboard-nvimBelow you can find a list of included plugins and their default settings."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,r.kt)("h2",{id:"snacksnvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/folke/snacks.nvim"},"snacks.nvim")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { dashboard = { enabled = false } }\n"))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{ "folke/snacks.nvim", opts = { dashboard = { enabled = false } } }\n')))),(0,r.kt)("h2",{id:"dashboard-nvim-1"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvimdev/dashboard-nvim"},"dashboard-nvim")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local logo = [[\n       \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557          Z\n       \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551      Z    \n       \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551  \u2588\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551   z       \n       \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2588\u2554\u255d    \u255a\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551 z         \n       \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551    \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551           \n       \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d     \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d     \u255a\u2550\u255d           \n  ]]\n\n  logo = string.rep("\\n", 8) .. logo .. "\\n\\n"\n\n  local opts = {\n    theme = "doom",\n    hide = {\n      -- this is taken care of by lualine\n      -- enabling this messes up the actual laststatus setting after loading a file\n      statusline = false,\n    },\n    config = {\n      header = vim.split(logo, "\\n"),\n      -- stylua: ignore\n      center = {\n        { action = \'lua LazyVim.pick()()\',                           desc = " Find File",       icon = "\uf002 ", key = "f" },\n        { action = "ene | startinsert",                              desc = " New File",        icon = "\uf15b ", key = "n" },\n        { action = \'lua LazyVim.pick("oldfiles")()\',                 desc = " Recent Files",    icon = "\uf0c5 ", key = "r" },\n        { action = \'lua LazyVim.pick("live_grep")()\',                desc = " Find Text",       icon = "\uf022 ", key = "g" },\n        { action = \'lua LazyVim.pick.config_files()()\',              desc = " Config",          icon = "\uf423 ", key = "c" },\n        { action = \'lua require("persistence").load()\',              desc = " Restore Session", icon = "\ue348 ", key = "s" },\n        { action = "LazyExtras",                                     desc = " Lazy Extras",     icon = "\uea8c ", key = "x" },\n        { action = "Lazy",                                           desc = " Lazy",            icon = "\udb81\udcb2 ", key = "l" },\n        { action = function() vim.api.nvim_input("<cmd>qa<cr>") end, desc = " Quit",            icon = "\uf426 ", key = "q" },\n      },\n      footer = function()\n        local stats = require("lazy").stats()\n        local ms = (math.floor(stats.startuptime * 100 + 0.5) / 100)\n        return { "\u26a1 Neovim loaded " .. stats.loaded .. "/" .. stats.count .. " plugins in " .. ms .. "ms" }\n      end,\n    },\n  }\n\n  for _, button in ipairs(opts.config.center) do\n    button.desc = button.desc .. string.rep(" ", 43 - #button.desc)\n    button.key_format = "  %s"\n  end\n\n  -- open dashboard after closing lazy\n  if vim.o.filetype == "lazy" then\n    vim.api.nvim_create_autocmd("WinClosed", {\n      pattern = tostring(vim.api.nvim_get_current_win()),\n      once = true,\n      callback = function()\n        vim.schedule(function()\n          vim.api.nvim_exec_autocmds("UIEnter", { group = "dashboard" })\n        end)\n      end,\n    })\n  end\n\n  return opts\nend\n'))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvimdev/dashboard-nvim",\n  lazy = false, -- As https://github.com/nvimdev/dashboard-nvim/pull/450, dashboard-nvim shouldn\'t be lazy-loaded to properly handle stdin.\n  opts = function()\n    local logo = [[\n         \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557          Z\n         \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551      Z    \n         \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551  \u2588\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551   z       \n         \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2588\u2554\u255d    \u255a\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551 z         \n         \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551    \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551           \n         \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d     \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d     \u255a\u2550\u255d           \n    ]]\n\n    logo = string.rep("\\n", 8) .. logo .. "\\n\\n"\n\n    local opts = {\n      theme = "doom",\n      hide = {\n        -- this is taken care of by lualine\n        -- enabling this messes up the actual laststatus setting after loading a file\n        statusline = false,\n      },\n      config = {\n        header = vim.split(logo, "\\n"),\n        -- stylua: ignore\n        center = {\n          { action = \'lua LazyVim.pick()()\',                           desc = " Find File",       icon = "\uf002 ", key = "f" },\n          { action = "ene | startinsert",                              desc = " New File",        icon = "\uf15b ", key = "n" },\n          { action = \'lua LazyVim.pick("oldfiles")()\',                 desc = " Recent Files",    icon = "\uf0c5 ", key = "r" },\n          { action = \'lua LazyVim.pick("live_grep")()\',                desc = " Find Text",       icon = "\uf022 ", key = "g" },\n          { action = \'lua LazyVim.pick.config_files()()\',              desc = " Config",          icon = "\uf423 ", key = "c" },\n          { action = \'lua require("persistence").load()\',              desc = " Restore Session", icon = "\ue348 ", key = "s" },\n          { action = "LazyExtras",                                     desc = " Lazy Extras",     icon = "\uea8c ", key = "x" },\n          { action = "Lazy",                                           desc = " Lazy",            icon = "\udb81\udcb2 ", key = "l" },\n          { action = function() vim.api.nvim_input("<cmd>qa<cr>") end, desc = " Quit",            icon = "\uf426 ", key = "q" },\n        },\n        footer = function()\n          local stats = require("lazy").stats()\n          local ms = (math.floor(stats.startuptime * 100 + 0.5) / 100)\n          return { "\u26a1 Neovim loaded " .. stats.loaded .. "/" .. stats.count .. " plugins in " .. ms .. "ms" }\n        end,\n      },\n    }\n\n    for _, button in ipairs(opts.config.center) do\n      button.desc = button.desc .. string.rep(" ", 43 - #button.desc)\n      button.key_format = "  %s"\n    end\n\n    -- open dashboard after closing lazy\n    if vim.o.filetype == "lazy" then\n      vim.api.nvim_create_autocmd("WinClosed", {\n        pattern = tostring(vim.api.nvim_get_current_win()),\n        once = true,\n        callback = function()\n          vim.schedule(function()\n            vim.api.nvim_exec_autocmds("UIEnter", { group = "dashboard" })\n          end)\n        end,\n      })\n    end\n\n    return opts\n  end,\n}\n')))))}p.isMDXComponent=!0}}]);