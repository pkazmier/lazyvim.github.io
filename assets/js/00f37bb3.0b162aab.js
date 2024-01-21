"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[1576],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),p=r,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(6010);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>_});var a=t(7462),r=t(7294),o=t(6010),i=t(2466),l=t(6550),c=t(1980),s=t(7392),u=t(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??m(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,s]=f({queryString:t,groupId:a}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),v=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var v=t(2389);const b="tabList__CuJ",h="tabItem_LNqP";function y(e){let{className:n,block:t,selectedValue:l,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=u.indexOf(n),a=s[t].value;a!==l&&(m(n),c(a))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>u.push(e),onKeyDown:p,onClick:d},i,{className:(0,o.Z)("tabs__item",h,i?.className,{"tabs__item--active":l===n})}),t??n)})))}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function k(e){const n=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,n)),r.createElement(w,(0,a.Z)({},e,n)))}function _(e){const n=(0,v.Z)();return r.createElement(k,(0,a.Z)({key:String(n)},e))}},4714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=t(7462),r=(t(7294),t(3905)),o=t(4866),i=t(5162);const l={sidebar_position:2},c="General Settings",s={unversionedId:"configuration/general",id:"configuration/general",title:"General Settings",description:"The files autocmds.lua, keymaps.lua, lazy.lua and options.lua under lua/config will be automatically loaded at the appropriate time,",source:"@site/docs/configuration/general.md",sourceDirName:"configuration",slug:"/configuration/general",permalink:"/configuration/general",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/configuration/general.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"lazy.nvim",permalink:"/configuration/lazy.nvim"},next:{title:"Plugins",permalink:"/configuration/plugins"}},u={},m=[{value:"Options",id:"options",level:2},{value:"Keymaps",id:"keymaps",level:2},{value:"Auto Commands",id:"auto-commands",level:2}],d={toc:m};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"general-settings"},"General Settings"),(0,r.kt)("p",null,"The files ",(0,r.kt)("inlineCode",{parentName:"p"},"autocmds.lua"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keymaps.lua"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy.lua")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"options.lua")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"lua/config")," will be automatically loaded at the appropriate time,\nso you don't need to require those files manually.\n",(0,r.kt)("strong",{parentName:"p"},"LazyVim")," comes with a set of default config files that will be loaded\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"before"))," your own."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:"{4-7}","{4-7}":!0},"~/.config/nvim\n\u251c\u2500\u2500 lua\n\u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 autocmds.lua\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 keymaps.lua\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 lazy.lua\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 options.lua\n\u2502\xa0\xa0 \u2514\u2500\u2500 plugins\n\u2502\xa0\xa0     \u251c\u2500\u2500 spec1.lua\n\u2502\xa0\xa0     \u251c\u2500\u2500 **\n\u2502\xa0\xa0     \u2514\u2500\u2500 spec2.lua\n\u2514\u2500\u2500 init.toml\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Do not ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," ",(0,r.kt)("inlineCode",{parentName:"p"},"autocmds"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keymaps"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"lua/config/")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"lazyvim.config")," manually.\n",(0,r.kt)("strong",{parentName:"p"},"LazyVim")," will load those files automatically.")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"custom",label:"Custom Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/options.lua"',title:'"lua/config/options.lua"'},"-- Options are automatically loaded before lazy.nvim startup\n-- Default options that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/options.lua\n-- Add any additional options here\n\n"))),(0,r.kt)(i.Z,{value:"defaults",label:"Default Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lazyvim.config.options"',title:'"lazyvim.config.options"'},'-- This file is automatically loaded by plugins.core\nvim.g.mapleader = " "\nvim.g.maplocalleader = "\\\\"\n\n-- Enable LazyVim auto format\nvim.g.autoformat = true\n\n-- LazyVim root dir detection\n-- Each entry can be:\n-- * the name of a detector function like `lsp` or `cwd`\n-- * a pattern or array of patterns like `.git` or `lua`.\n-- * a function with signature `function(buf) -> string|string[]`\nvim.g.root_spec = { "lsp", { ".git", "lua" }, "cwd" }\n\nlocal opt = vim.opt\n\nopt.autowrite = true -- Enable auto write\nopt.clipboard = "unnamedplus" -- Sync with system clipboard\nopt.completeopt = "menu,menuone,noselect"\nopt.conceallevel = 2 -- Hide * markup for bold and italic, but not markers with substitutions\nopt.confirm = true -- Confirm to save changes before exiting modified buffer\nopt.cursorline = true -- Enable highlighting of the current line\nopt.expandtab = true -- Use spaces instead of tabs\nopt.formatoptions = "jcroqlnt" -- tcqj\nopt.grepformat = "%f:%l:%c:%m"\nopt.grepprg = "rg --vimgrep"\nopt.ignorecase = true -- Ignore case\nopt.inccommand = "nosplit" -- preview incremental substitute\nopt.laststatus = 3 -- global statusline\nopt.list = true -- Show some invisible characters (tabs...\nopt.mouse = "a" -- Enable mouse mode\nopt.number = true -- Print line number\nopt.pumblend = 10 -- Popup blend\nopt.pumheight = 10 -- Maximum number of entries in a popup\nopt.relativenumber = true -- Relative line numbers\nopt.scrolloff = 4 -- Lines of context\nopt.sessionoptions = { "buffers", "curdir", "tabpages", "winsize", "help", "globals", "skiprtp", "folds" }\nopt.shiftround = true -- Round indent\nopt.shiftwidth = 2 -- Size of an indent\nopt.shortmess:append({ W = true, I = true, c = true, C = true })\nopt.showmode = false -- Dont show mode since we have a statusline\nopt.sidescrolloff = 8 -- Columns of context\nopt.signcolumn = "yes" -- Always show the signcolumn, otherwise it would shift the text each time\nopt.smartcase = true -- Don\'t ignore case with capitals\nopt.smartindent = true -- Insert indents automatically\nopt.spelllang = { "en" }\nopt.splitbelow = true -- Put new windows below current\nopt.splitkeep = "screen"\nopt.splitright = true -- Put new windows right of current\nopt.tabstop = 2 -- Number of spaces tabs count for\nopt.termguicolors = true -- True color support\nopt.timeoutlen = 300\nopt.undofile = true\nopt.undolevels = 10000\nopt.updatetime = 200 -- Save swap file and trigger CursorHold\nopt.virtualedit = "block" -- Allow cursor to move where there is no text in visual block mode\nopt.wildmode = "longest:full,full" -- Command-line completion mode\nopt.winminwidth = 5 -- Minimum window width\nopt.wrap = false -- Disable line wrap\nopt.fillchars = {\n  foldopen = "\uf47c",\n  foldclose = "\uf460",\n  -- fold = "\u2e31",\n  fold = " ",\n  foldsep = " ",\n  diff = "\u2571",\n  eob = " ",\n}\n\nif vim.fn.has("nvim-0.10") == 1 then\n  opt.smoothscroll = true\nend\n\n-- Folding\nvim.opt.foldlevel = 99\nvim.opt.foldtext = "v:lua.require\'lazyvim.util\'.ui.foldtext()"\n\nif vim.fn.has("nvim-0.9.0") == 1 then\n  vim.opt.statuscolumn = [[%!v:lua.require\'lazyvim.util\'.ui.statuscolumn()]]\nend\n\n-- HACK: causes freezes on <= 0.9, so only enable on >= 0.10 for now\nif vim.fn.has("nvim-0.10") == 1 then\n  vim.opt.foldmethod = "expr"\n  vim.opt.foldexpr = "v:lua.require\'lazyvim.util\'.ui.foldexpr()"\nelse\n  vim.opt.foldmethod = "indent"\nend\n\nvim.o.formatexpr = "v:lua.require\'lazyvim.util\'.format.formatexpr()"\n\n-- Fix markdown indentation settings\nvim.g.markdown_recommended_style = 0\n\n')))),(0,r.kt)("h2",{id:"keymaps"},"Keymaps"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"custom",label:"Custom Keymaps",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/keymaps.lua"',title:'"lua/config/keymaps.lua"'},"-- Keymaps are automatically loaded on the VeryLazy event\n-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua\n-- Add any additional keymaps here\n\n"))),(0,r.kt)(i.Z,{value:"defaults",label:"Default Keymaps",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lazyvim.config.keymaps"',title:'"lazyvim.config.keymaps"'},'-- This file is automatically loaded by lazyvim.config.init\nlocal Util = require("lazyvim.util")\n\n-- DO NOT USE THIS IN YOU OWN CONFIG!!\n-- use `vim.keymap.set` instead\nlocal map = Util.safe_keymap_set\n\n-- better up/down\nmap({ "n", "x" }, "j", "v:count == 0 ? \'gj\' : \'j\'", { expr = true, silent = true })\nmap({ "n", "x" }, "<Down>", "v:count == 0 ? \'gj\' : \'j\'", { expr = true, silent = true })\nmap({ "n", "x" }, "k", "v:count == 0 ? \'gk\' : \'k\'", { expr = true, silent = true })\nmap({ "n", "x" }, "<Up>", "v:count == 0 ? \'gk\' : \'k\'", { expr = true, silent = true })\n\n-- Move to window using the <ctrl> hjkl keys\nmap("n", "<C-h>", "<C-w>h", { desc = "Go to left window", remap = true })\nmap("n", "<C-j>", "<C-w>j", { desc = "Go to lower window", remap = true })\nmap("n", "<C-k>", "<C-w>k", { desc = "Go to upper window", remap = true })\nmap("n", "<C-l>", "<C-w>l", { desc = "Go to right window", remap = true })\n\n-- Resize window using <ctrl> arrow keys\nmap("n", "<C-Up>", "<cmd>resize +2<cr>", { desc = "Increase window height" })\nmap("n", "<C-Down>", "<cmd>resize -2<cr>", { desc = "Decrease window height" })\nmap("n", "<C-Left>", "<cmd>vertical resize -2<cr>", { desc = "Decrease window width" })\nmap("n", "<C-Right>", "<cmd>vertical resize +2<cr>", { desc = "Increase window width" })\n\n-- Move Lines\nmap("n", "<A-j>", "<cmd>m .+1<cr>==", { desc = "Move down" })\nmap("n", "<A-k>", "<cmd>m .-2<cr>==", { desc = "Move up" })\nmap("i", "<A-j>", "<esc><cmd>m .+1<cr>==gi", { desc = "Move down" })\nmap("i", "<A-k>", "<esc><cmd>m .-2<cr>==gi", { desc = "Move up" })\nmap("v", "<A-j>", ":m \'>+1<cr>gv=gv", { desc = "Move down" })\nmap("v", "<A-k>", ":m \'<-2<cr>gv=gv", { desc = "Move up" })\n\n-- buffers\nmap("n", "<S-h>", "<cmd>bprevious<cr>", { desc = "Prev buffer" })\nmap("n", "<S-l>", "<cmd>bnext<cr>", { desc = "Next buffer" })\nmap("n", "[b", "<cmd>bprevious<cr>", { desc = "Prev buffer" })\nmap("n", "]b", "<cmd>bnext<cr>", { desc = "Next buffer" })\nmap("n", "<leader>bb", "<cmd>e #<cr>", { desc = "Switch to Other Buffer" })\nmap("n", "<leader>`", "<cmd>e #<cr>", { desc = "Switch to Other Buffer" })\n\n-- Clear search with <esc>\nmap({ "i", "n" }, "<esc>", "<cmd>noh<cr><esc>", { desc = "Escape and clear hlsearch" })\n\n-- Clear search, diff update and redraw\n-- taken from runtime/lua/_editor.lua\nmap(\n  "n",\n  "<leader>ur",\n  "<Cmd>nohlsearch<Bar>diffupdate<Bar>normal! <C-L><CR>",\n  { desc = "Redraw / clear hlsearch / diff update" }\n)\n\n-- https://github.com/mhinz/vim-galore#saner-behavior-of-n-and-n\nmap("n", "n", "\'Nn\'[v:searchforward].\'zv\'", { expr = true, desc = "Next search result" })\nmap("x", "n", "\'Nn\'[v:searchforward]", { expr = true, desc = "Next search result" })\nmap("o", "n", "\'Nn\'[v:searchforward]", { expr = true, desc = "Next search result" })\nmap("n", "N", "\'nN\'[v:searchforward].\'zv\'", { expr = true, desc = "Prev search result" })\nmap("x", "N", "\'nN\'[v:searchforward]", { expr = true, desc = "Prev search result" })\nmap("o", "N", "\'nN\'[v:searchforward]", { expr = true, desc = "Prev search result" })\n\n-- Add undo break-points\nmap("i", ",", ",<c-g>u")\nmap("i", ".", ".<c-g>u")\nmap("i", ";", ";<c-g>u")\n\n-- save file\nmap({ "i", "x", "n", "s" }, "<C-s>", "<cmd>w<cr><esc>", { desc = "Save file" })\n\n--keywordprg\nmap("n", "<leader>K", "<cmd>norm! K<cr>", { desc = "Keywordprg" })\n\n-- better indenting\nmap("v", "<", "<gv")\nmap("v", ">", ">gv")\n\n-- lazy\nmap("n", "<leader>l", "<cmd>Lazy<cr>", { desc = "Lazy" })\n\n-- new file\nmap("n", "<leader>fn", "<cmd>enew<cr>", { desc = "New File" })\n\nmap("n", "<leader>xl", "<cmd>lopen<cr>", { desc = "Location List" })\nmap("n", "<leader>xq", "<cmd>copen<cr>", { desc = "Quickfix List" })\n\nmap("n", "[q", vim.cmd.cprev, { desc = "Previous quickfix" })\nmap("n", "]q", vim.cmd.cnext, { desc = "Next quickfix" })\n\n-- formatting\nmap({ "n", "v" }, "<leader>cf", function()\n  Util.format({ force = true })\nend, { desc = "Format" })\n\n-- diagnostic\nlocal diagnostic_goto = function(next, severity)\n  local go = next and vim.diagnostic.goto_next or vim.diagnostic.goto_prev\n  severity = severity and vim.diagnostic.severity[severity] or nil\n  return function()\n    go({ severity = severity })\n  end\nend\nmap("n", "<leader>cd", vim.diagnostic.open_float, { desc = "Line Diagnostics" })\nmap("n", "]d", diagnostic_goto(true), { desc = "Next Diagnostic" })\nmap("n", "[d", diagnostic_goto(false), { desc = "Prev Diagnostic" })\nmap("n", "]e", diagnostic_goto(true, "ERROR"), { desc = "Next Error" })\nmap("n", "[e", diagnostic_goto(false, "ERROR"), { desc = "Prev Error" })\nmap("n", "]w", diagnostic_goto(true, "WARN"), { desc = "Next Warning" })\nmap("n", "[w", diagnostic_goto(false, "WARN"), { desc = "Prev Warning" })\n\n-- stylua: ignore start\n\n-- toggle options\nmap("n", "<leader>uf", function() Util.format.toggle() end, { desc = "Toggle auto format (global)" })\nmap("n", "<leader>uF", function() Util.format.toggle(true) end, { desc = "Toggle auto format (buffer)" })\nmap("n", "<leader>us", function() Util.toggle("spell") end, { desc = "Toggle Spelling" })\nmap("n", "<leader>uw", function() Util.toggle("wrap") end, { desc = "Toggle Word Wrap" })\nmap("n", "<leader>uL", function() Util.toggle("relativenumber") end, { desc = "Toggle Relative Line Numbers" })\nmap("n", "<leader>ul", function() Util.toggle.number() end, { desc = "Toggle Line Numbers" })\nmap("n", "<leader>ud", function() Util.toggle.diagnostics() end, { desc = "Toggle Diagnostics" })\nlocal conceallevel = vim.o.conceallevel > 0 and vim.o.conceallevel or 3\nmap("n", "<leader>uc", function() Util.toggle("conceallevel", false, {0, conceallevel}) end, { desc = "Toggle Conceal" })\nif vim.lsp.buf.inlay_hint or vim.lsp.inlay_hint then\n  map( "n", "<leader>uh", function() Util.toggle.inlay_hints() end, { desc = "Toggle Inlay Hints" })\nend\nmap("n", "<leader>uT", function() if vim.b.ts_highlight then vim.treesitter.stop() else vim.treesitter.start() end end, { desc = "Toggle Treesitter Highlight" })\nmap("n", "<leader>ub", function() Util.toggle("background", false, {"light", "dark"}) end, { desc = "Toggle Background" })\n\n-- lazygit\nmap("n", "<leader>gg", function() Util.terminal({ "lazygit" }, { cwd = Util.root(), esc_esc = false, ctrl_hjkl = false }) end, { desc = "Lazygit (root dir)" })\nmap("n", "<leader>gG", function() Util.terminal({ "lazygit" }, {esc_esc = false, ctrl_hjkl = false}) end, { desc = "Lazygit (cwd)" })\n\n-- quit\nmap("n", "<leader>qq", "<cmd>qa<cr>", { desc = "Quit all" })\n\n-- highlights under cursor\nmap("n", "<leader>ui", vim.show_pos, { desc = "Inspect Pos" })\n\n-- LazyVim Changelog\nmap("n", "<leader>L", function() Util.news.changelog() end, { desc = "LazyVim Changelog" })\n\n-- floating terminal\nlocal lazyterm = function() Util.terminal(nil, { cwd = Util.root() }) end\nmap("n", "<leader>ft", lazyterm, { desc = "Terminal (root dir)" })\nmap("n", "<leader>fT", function() Util.terminal() end, { desc = "Terminal (cwd)" })\nmap("n", "<c-/>", lazyterm, { desc = "Terminal (root dir)" })\nmap("n", "<c-_>", lazyterm, { desc = "which_key_ignore" })\n\n-- Terminal Mappings\nmap("t", "<esc><esc>", "<c-\\\\><c-n>", { desc = "Enter Normal Mode" })\nmap("t", "<C-h>", "<cmd>wincmd h<cr>", { desc = "Go to left window" })\nmap("t", "<C-j>", "<cmd>wincmd j<cr>", { desc = "Go to lower window" })\nmap("t", "<C-k>", "<cmd>wincmd k<cr>", { desc = "Go to upper window" })\nmap("t", "<C-l>", "<cmd>wincmd l<cr>", { desc = "Go to right window" })\nmap("t", "<C-/>", "<cmd>close<cr>", { desc = "Hide Terminal" })\nmap("t", "<c-_>", "<cmd>close<cr>", { desc = "which_key_ignore" })\n\n-- windows\nmap("n", "<leader>ww", "<C-W>p", { desc = "Other window", remap = true })\nmap("n", "<leader>wd", "<C-W>c", { desc = "Delete window", remap = true })\nmap("n", "<leader>w-", "<C-W>s", { desc = "Split window below", remap = true })\nmap("n", "<leader>w|", "<C-W>v", { desc = "Split window right", remap = true })\nmap("n", "<leader>-", "<C-W>s", { desc = "Split window below", remap = true })\nmap("n", "<leader>|", "<C-W>v", { desc = "Split window right", remap = true })\n\n-- tabs\nmap("n", "<leader><tab>l", "<cmd>tablast<cr>", { desc = "Last Tab" })\nmap("n", "<leader><tab>f", "<cmd>tabfirst<cr>", { desc = "First Tab" })\nmap("n", "<leader><tab><tab>", "<cmd>tabnew<cr>", { desc = "New Tab" })\nmap("n", "<leader><tab>]", "<cmd>tabnext<cr>", { desc = "Next Tab" })\nmap("n", "<leader><tab>d", "<cmd>tabclose<cr>", { desc = "Close Tab" })\nmap("n", "<leader><tab>[", "<cmd>tabprevious<cr>", { desc = "Previous Tab" })\n\n')))),(0,r.kt)("h2",{id:"auto-commands"},"Auto Commands"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"custom",label:"Custom Auto Commands",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/autocmds.lua"',title:'"lua/config/autocmds.lua"'},"-- Autocmds are automatically loaded on the VeryLazy event\n-- Default autocmds that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/autocmds.lua\n-- Add any additional autocmds here\n\n"))),(0,r.kt)(i.Z,{value:"defaults",label:"Default Auto Commands",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lazyvim.config.autocmds"',title:'"lazyvim.config.autocmds"'},'-- This file is automatically loaded by lazyvim.config.init.\n\nlocal function augroup(name)\n  return vim.api.nvim_create_augroup("lazyvim_" .. name, { clear = true })\nend\n\n-- Check if we need to reload the file when it changed\nvim.api.nvim_create_autocmd({ "FocusGained", "TermClose", "TermLeave" }, {\n  group = augroup("checktime"),\n  callback = function()\n    if vim.o.buftype ~= \'nofile\' then\n      vim.cmd(\'checktime\')\n    end\n  end\n})\n\n-- Highlight on yank\nvim.api.nvim_create_autocmd("TextYankPost", {\n  group = augroup("highlight_yank"),\n  callback = function()\n    vim.highlight.on_yank()\n  end,\n})\n\n-- resize splits if window got resized\nvim.api.nvim_create_autocmd({ "VimResized" }, {\n  group = augroup("resize_splits"),\n  callback = function()\n    local current_tab = vim.fn.tabpagenr()\n    vim.cmd("tabdo wincmd =")\n    vim.cmd("tabnext " .. current_tab)\n  end,\n})\n\n-- go to last loc when opening a buffer\nvim.api.nvim_create_autocmd("BufReadPost", {\n  group = augroup("last_loc"),\n  callback = function(event)\n    local exclude = { "gitcommit" }\n    local buf = event.buf\n    if vim.tbl_contains(exclude, vim.bo[buf].filetype) or vim.b[buf].lazyvim_last_loc then\n      return\n    end\n    vim.b[buf].lazyvim_last_loc = true\n    local mark = vim.api.nvim_buf_get_mark(buf, \'"\')\n    local lcount = vim.api.nvim_buf_line_count(buf)\n    if mark[1] > 0 and mark[1] <= lcount then\n      pcall(vim.api.nvim_win_set_cursor, 0, mark)\n    end\n  end,\n})\n\n-- close some filetypes with <q>\nvim.api.nvim_create_autocmd("FileType", {\n  group = augroup("close_with_q"),\n  pattern = {\n    "PlenaryTestPopup",\n    "help",\n    "lspinfo",\n    "man",\n    "notify",\n    "qf",\n    "query",\n    "spectre_panel",\n    "startuptime",\n    "tsplayground",\n    "neotest-output",\n    "checkhealth",\n    "neotest-summary",\n    "neotest-output-panel",\n  },\n  callback = function(event)\n    vim.bo[event.buf].buflisted = false\n    vim.keymap.set("n", "q", "<cmd>close<cr>", { buffer = event.buf, silent = true })\n  end,\n})\n\n-- wrap and check for spell in text filetypes\nvim.api.nvim_create_autocmd("FileType", {\n  group = augroup("wrap_spell"),\n  pattern = { "gitcommit", "markdown" },\n  callback = function()\n    vim.opt_local.wrap = true\n    vim.opt_local.spell = true\n  end,\n})\n\n-- Fix conceallevel for json files\nvim.api.nvim_create_autocmd({ "FileType" }, {\n  group = augroup("json_conceal"),\n  pattern = { "json", "jsonc", "json5" },\n  callback = function()\n    vim.wo.conceallevel = 0\n  end,\n})\n\n-- Auto create dir when saving a file, in case some intermediate directory does not exist\nvim.api.nvim_create_autocmd({ "BufWritePre" }, {\n  group = augroup("auto_create_dir"),\n  callback = function(event)\n    if event.match:match("^%w%w+://") then\n      return\n    end\n    local file = vim.loop.fs_realpath(event.match) or event.match\n    vim.fn.mkdir(vim.fn.fnamemodify(file, ":p:h"), "p")\n  end,\n})\n\n')))))}p.isMDXComponent=!0}}]);