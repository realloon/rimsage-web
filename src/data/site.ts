export const pageMeta = {
  title: 'RimSage — RimWorld Source MCP Server',
  description:
    'RimSage is a RimWorld Source MCP Server that gives AI accurate access to RimWorld C# and XML APIs through search and retrieval tools.',
  siteName: 'RimSage',
  canonicalPath: '/',
} as const

export const navLinks = [
  { href: '#features', i18nKey: 'nav.features', label: 'Features' },
  { href: '#tools', i18nKey: 'nav.tools', label: 'Tools' },
  { href: '#connect', i18nKey: 'nav.connect', label: 'Connect' },
  { href: '#self', i18nKey: 'nav.selfhost', label: 'Self-Hosted' },
] as const

export const featureCards = [
  {
    titleKey: 'features.card1.title',
    title: 'Factual APIs',
    descKey: 'features.card1.desc',
    desc: 'Query real C# and XML so your agent references APIs that actually exist.',
  },
  {
    titleKey: 'features.card2.title',
    title: 'Context Efficiency',
    descKey: 'features.card2.desc',
    desc: 'Pull on demand to cut token usage and improve model performance.',
  },
  {
    titleKey: 'features.card3.title',
    title: 'Built for RimWorld',
    descKey: 'features.card3.desc',
    desc: "Retrieval optimized for RimWorld's architecture.",
  },
  {
    titleKey: 'features.card4.title',
    title: 'Easy to Use',
    descKey: 'features.card4.desc',
    desc: 'Connect in seconds, available anywhere, start anytime.',
  },
] as const

export const toolItems = [
  {
    name: 'search_rimworld_source',
    descKey: 'tools.search',
    desc: 'Search RimWorld source code.',
  },
  {
    name: 'read_rimworld_file',
    descKey: 'tools.read',
    desc: 'Read files with pagination.',
  },
  {
    name: 'list_directory',
    descKey: 'tools.list',
    desc: 'List directory contents.',
  },
  {
    name: 'get_def_details',
    descKey: 'tools.getDef',
    desc: 'Resolve Def details by defName.',
  },
  {
    name: 'search_defs',
    descKey: 'tools.searchDefs',
    desc: 'Search Def collections.',
  },
  {
    name: 'read_csharp_type',
    descKey: 'tools.readType',
    desc: 'Read C# class/struct/interface definitions.',
  },
] as const

export const connectClients = [
  {
    id: 'claude',
    label: 'Claude Code',
    commandHtml:
      '<span class="token-command">claude</span> mcp add rimworld-source --transport http https://mcp.rimsage.com/mcp',
  },
  {
    id: 'gemini',
    label: 'Gemini CLI',
    commandHtml:
      '<span class="token-command">gemini</span> mcp add rimworld-source --transport http https://mcp.rimsage.com/mcp',
  },
  {
    id: 'trae',
    label: 'TRAE',
    commandHtml: '# TODO: replace with TRAE MCP integration command',
    isPlaceholder: true,
  },
  {
    id: 'cursor',
    label: 'Cursor',
    commandHtml: '# TODO: replace with Cursor MCP integration command',
    isPlaceholder: true,
  },
  {
    id: 'kilo',
    label: 'Kilo Code',
    commandHtml: '# TODO: replace with Kilo Code MCP integration command',
    isPlaceholder: true,
  },
  {
    id: 'opencode',
    label: 'opencode',
    commandHtml: '# TODO: replace with opencode MCP integration command',
    isPlaceholder: true,
  },
  {
    id: 'copilot',
    label: 'VS Code',
    commandHtml:
      '<span class="token-command">code</span> --add-mcp "{\\"name\\":\\"rimsage\\", \\"type\\": \\"http\\", \\"url\\": \\"https://mcp.rimsage.com/mcp\\"}"',
  },
] as const

export const genericConfigHtml = `<span class="token-punc">{</span>
  <span class="token-key">"mcpServers"</span><span class="token-punc">: {</span>
    <span class="token-key">"rimworld-source"</span><span class="token-punc">: {</span>
      <span class="token-key">"url"</span><span class="token-punc">: </span><span class="token-string">"https://mcp.rimsage.com/mcp"</span>
    <span class="token-punc">}</span>
  <span class="token-punc">}</span>
<span class="token-punc">}</span>`

export const selfHostedItems = [
  { key: 'self.item1', text: 'Requires Bun runtime and Ripgrep.' },
  {
    key: 'self.item2',
    text: 'Needs local RimWorld files plus a decompiled C# project.',
  },
  {
    key: 'self.item3',
    text: 'Permitted under the RimWorld EULA for local use.',
  },
] as const
