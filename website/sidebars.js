module.exports = {
  introductionSidebar: [
    {
      type: "doc",
      id: "start/welcome",
      label: "🏠 Home",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "category",
      collapsed: false,
      label: "Introduction to Elastos",
      items: [
        {
          type: "doc",
          id: "start/introduction",
          label: "What is Elastos?",
        },
        {
          type: "doc",
          id: "start/history",
          label: "History",
        },
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Getting Started with Elastos",
      items: [
        {
          type: "doc",
          id: "start/dids",
          label: "Web3 Identities",
        },
        {
          type: "doc",
          id: "start/essentials",
          label: "🔑 Create an Account",
        },
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "ELA Token",
      items: [
        {
          type: "doc",
          id: "start/utility",
          label: "Utility",
        },
        {
          type: "doc",
          id: "start/types",
          label: "Types",
        },
        {
          type: "doc",
          id: "start/wallets",
          label: "Custody",
        },
        {
          type: "doc",
          id: "start/staking-guide",
          label: "Staking Guide",
        },
        {
          type: "doc",
          id: "start/economics",
          label: "Economics",
        },
      ],
    },
    {
      type: "doc",
      id: "start/building",
      label: "🛠️ Building Overview"
    },
    {
      type: "doc",
      id: "start/governance",
      label: "Governance"
    },
    {
      type: "doc",
      id: "start/funding",
      label: "Funding"
    },
    {
      type: "doc",
      id: "start/community",
      label: "Community"
    },
    {
      type: "doc",
      id: "start/contributing",
      label: "Contributing"
    },
    {
      type: "doc",
      id: "start/faq",
      label: "FAQs"
    }
  ],
  learnSidebar: [
    {
      type: "doc",
      id: "learn/welcome",
      label: "🏠 Home",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Components </small></b></span>"
    },
    {
      type: "doc",
      id: "learn/architecture",
      label: "Platform Architecture",
    },
    {
      type: "category",
      collapsed: false,
      label: "Mainchain",
      items: [
        {
          type: "doc",
          id: "learn/mainchain/intro",
          label: "Introduction",
        },
        {
          type: "category",
          collapsed: true,
          label: "🎈 Elastic Consensus",
          items: [
            {
              type: "doc",
              id: "learn/mainchain/auxpow",
              label: "Auxiliary Proof of Work",
            },
            {
              type: "doc",
              id: "learn/mainchain/bpos",
              label: "Bonded Proof of Stake",
            },
          ],
        },

      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Sidechains",
      items: [
        {
          type: "doc",
          id: "learn/sidechains/intro",
          label: "Introduction",
        },
        {
          type: "doc",
          id: "learn/sidechains/esc",
          label: "💡 Elastos Smart Chain (ESC)",
        },
        {
          type: "doc",
          id: "learn/sidechains/eid",
          label: "🪪 Elastos Identity Chain (EID)",
        },
        {
          type: "doc",
          id: "learn/sidechains/cross-chain",
          label: "Cross Chain Protocol",
        },
        {
          type: "doc",
          id: "learn/sidechains/registration",
          label: "Registration",
        },
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Identities",
      items: [
        {
          type: "doc",
          id: "learn/dids/intro",
          label: "Introduction",
        },
        {
          type: "doc",
          id: "learn/dids/method",
          label: "🪪 Method",
        },
        {
          type: "doc",
          id: "learn/dids/claims",
          label: "Verifiable Claims",
        },
        {
          type: "doc",
          id: "learn/dids/definitions",
          label: "Definitions",
        },
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "User Data Vaults (Hive)",
      items: [
        {
          type: "doc",
          id: "learn/hive/intro",
          label: "Introduction",
        },
        {
          type: "category",
          collapsed: true,
          label: "Features",
          items: [
            {
              type: "doc",
              id: "learn/hive/features/auth",
              label: "DID Authentication",
            },
            {
              type: "doc",
              id: "learn/hive/features/vault-selection",
              label: "Vault Selection",
            },
            {
              type: "doc",
              id: "learn/hive/features/scripting",
              label: "Scripting Mechanism",
            },
            {
              type: "doc",
              id: "learn/hive/features/ipfs",
              label: "Integrated IPFS",
            },
            {
              type: "doc",
              id: "learn/hive/features/backup",
              label: "Backup & Restore",
            },
            {
              type: "doc",
              id: "learn/hive/features/migration",
              label: "Vault Migration",
            },
          ]
        },
        {
          type: "category",
          collapsed: true,
          label: "Concepts",
          items: [
            {
              type: "doc",
              id: "learn/hive/concepts/hive-node",
              label: "Hive Node",
            },
            {
              type: "doc",
              id: "learn/hive/concepts/vault-service",
              label: "Vault",
            },
            {
              type: "doc",
              id: "learn/hive/concepts/did-backup",
              label: "DID Backup",
            },
            {
              type: "doc",
              id: "learn/hive/concepts/scripting",
              label: "Scripting",
            },
            {
              type: "doc",
              id: "learn/hive/concepts/vault-backup",
              label: "Vault Backup",
            },
            {
              type: "doc",
              id: "learn/hive/concepts/migration",
              label: "Migration",
            },
          ]
        }
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "P2P Messaging (Carrier)",
      items: [
        {
          type: "doc",
          id: "learn/carrier/intro",
          label: "Introduction",
        },
      ],
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Others Topics </small></b></span>"
    },
    {
      type: "doc",
      id: "learn/other/basics",
      label: "Blockchain Basics",
    },
  ],
  developSidebar: [
    {
      type: "doc",
      id: "develop/welcome",
      label: "🏠 Home",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Building Decentralized Apps </small></b></span>"
    },
    {
      type: "doc",
      id: "develop/quick-start",
      label: "⭐ Quick Start"
    },
    {
      type: "doc",
      id: "develop/resources",
      label: "Resources"
    },
    {
      type: "doc",
      id: "tutorials/welcome",
      label: "Examples & Tutorials ↗"
    },
    {
      type: "category",
      collapsed: true,
      label: "Smart Contracts",
      items: [
        {
          type: "doc",
          id: "develop/contracts/whatisacontract",
          label: "What is a Smart Contract",
        },
        {
          type: "doc",
          id: "develop/contracts/remix",
          label: "Deploy using Remix",
        },
        {
          type: "doc",
          id: "develop/contracts/hardhat",
          label: "Deploy using Hardhat",
        },
        {
          type: "doc",
          id: "develop/contracts/truffle",
          label: "Deploy using Truffle",
        },
        {
          type: "doc",
          id: "develop/contracts/verify",
          label: "Verify on Explorer",
        },
      ],
    },
    {
      type: "doc",
      id: "develop/add-network",
      label: "Add ESC Programatically"
    },
    // {
    //   type: "doc",
    //   id: "develop/integrate/frontend",
    //   label: "Build the Web Frontend",
    // },
    {
      type: "category",
      collapsed: false,
      label: "Interact with DIDs",
      items: [
        {
          type: "doc",
          id: "develop/dids/essentials",
          label: "📱 via Essentials",
        },
        {
          type: "doc",
          id: "develop/dids/metamask",
          label: "🖥️ via Metamask",
        },
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Add User Data to Vault",
      items: [
        {
          type: "doc",
          id: "develop/hive/connect",
          label: "Connect",
        },
        {
          type: "doc",
          id: "develop/hive/write",
          label: "Write",
        },
      ],
    },
    // {
    //   type: "doc",
    //   id: "develop/analytics",
    //   label: "Data Analytics"
    // },
    {
      type: "doc",
      id: "develop/crosschain",
      label: "Mainchain-Sidechain Transfer"
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Developer Tools </small></b></span>"
    },
    {
      type: "doc",
      id: "sdk/general/connectivity/introduction",
      label: "Elastos JS ↗",
    },
    {
      type: "doc",
      id: "api/providers",
      label: "🌐 Public Endpoints ↗"
    },
    {
      type: "doc",
      id: "sdk/welcome",
      label: "SDKs ↗"
    },
    {
      type: "doc",
      id: "tutorials/welcome",
      label: "API References ↗"
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Resources </small></b></span>"
    },
    {
      type: "doc",
      id: "api/providers",
      label: "Explorers ↗",
    },
    {
      type: "link",
      href: "https://elastos.info/essentials-the-super-wallet/",
      label: "Wallets",
    },
  ],
  tutorialSidebar: [
    {
      type: "doc",
      id: "tutorials/welcome",
      label: "🏠 Home",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Smart Contracts </small></b></span>"
    },
    {
      type: "category",
      collapsed: false,
      label: "Fungible Tokens",
      items: [
        {
          type: "doc",
          id: "tutorials/fts/create-erc20",
          label: "Create an ERC20 Token",
        },
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Non-Fungible Tokens",
      items: [
        {
          type: "doc",
          id: "tutorials/nfts/create-nft",
          label: "Create an NFT Contract",
        },
        {
          type: "doc",
          id: "tutorials/nfts/mint-nft",
          label: "Mint an NFT",
        },
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "User Interface",
      items: [
        {
          type: "doc",
          id: "tutorials/ui/frontend",
          label: "Create a Web Frontend",
        },
      ],
    },
    {
      type: "html",
      value: "<hr/>"
    },
    // {
    //   type: "html",
    //   value: "<span class='menu__link'><b><small> SmartWeb dApp </small></b></span>"
    // },
    // {
    //   type: "doc",
    //   id: "tutorials/dids/login",
    //   label: "Login with DID",
    // },
    // {
    //   type: "doc",
    //   id: "tutorials/dids/issue",
    //   label: "Issue DID Credential",
    // },
    // {
    //   type: "doc",
    //   id: "tutorials/hive/store-data",
    //   label: "Save Data to Hive",
    // },
  ],
  nodesSidebar: [
    {
      type: "doc",
      id: "nodes/overview",
      label: "Overview",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Supernodes </small></b></span>"
    },
    {
      type: "doc",
      id: "nodes/requirements",
      label: "Requirements",
    },
    {
      type: "doc",
      id: "nodes/registration-guide",
      label: "Registration Guide",
    },
    {
      type: "doc",
      id: "nodes/bpos-upgrade",
      label: "❇️ BPoS Upgrade",
    },
    {
      type: "doc",
      id: "nodes/quick-setup",
      label: "Quick Setup",
    },
    {
      type: "category",
      collapsed: true,
      label: "Advanced",
      items: [
        {
          type: "doc",
          id: "nodes/advanced",
          label: "Detailed Setup",
        },
        {
          type: "doc",
          id: "nodes/security",
          label: "Security Tips",
        },
        {
          type: "doc",
          id: "nodes/config",
          label: "Configuration File",
        },
        {
          type: "doc",
          id: "nodes/keys",
          label: "Backup & Restore",
        },
      ]
    },
    {
      type: "doc",
      id: "nodes/faq",
      label: "FAQ",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Hive Nodes </small></b></span>"
    },
    {
      type: "doc",
      id: "nodes/hive/introduction",
      label: "Introduction",
    },
    {
      type: "category",
      collapsed: true,
      label: "Install & Deploy",
      items: [
        {
          type: "doc",
          id: "nodes/hive/docker-deploy",
          label: "Docker",
        },
        {
          type: "doc",
          id: "nodes/hive/direct-deploy",
          label: "Direct",
        },
      ]
    },
    {
      type: "doc",
      id: "nodes/hive/config",
      label: "Configuration",
    },
    {
      type: "link",
      href: "https://apidocs.trinity-tech.io/hive-node-https-apis/",
      label: "HTTP API  ↗",
    },
  ],
  apiSidebar: [
    {
      type: "doc",
      id: "api/welcome",
      label: "Index",
    },
    {
      type: "doc",
      id: "api/providers",
      label: "🌐 Public Endpoints",
    },
    {
      type: "doc",
      id: "api/contracts",
      label: "📃 Addresses",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Mainchain </small></b></span>"
    },
    {
      type: "doc",
      id: "api/mainchain/cli",
      label: "ELA-CLI"
    },
    {
      type: "doc",
      id: "api/mainchain/rpc",
      label: "JSON-RPC"
    },
    {
      type: "doc",
      id: "api/mainchain/rest",
      label: "REST API"
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Elastos Smart Chain (ESC) </small></b></span>"
    },
    {
      type: "doc",
      id: "api/sidechains/esc/cli",
      label: "CLI",
    },
    {
      type: "link",
      href: "https://github.com/elastos/Elastos.ELA.SideChain.ESC/wiki/JSON-RPC",
      label: "JSON-RPC"
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Elastos Identity Chain (EID) </small></b></span>"
    },
    {
      type: "doc",
      id: "api/sidechains/eid/rpc",
      label: "JSON-RPC",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Arbiter </small></b></span>"
    },
    {
      type: "doc",
      id: "api/arbiter/rpc",
      label: "JSON-RPC"
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Hive Nodes </small></b></span>"
    },
    {
      type: "link",
      href: "https://apidocs.trinity-tech.io/hive-node-https-apis/",
      label: "HTTP API"
    },
  ],
  sdkSidebar: [
    {
      type: "doc",
      id: "sdk/welcome",
      label: "🏠 Home",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> SDKs </small></b></span>"
    },
    {
      type: "category",
      collapsed: false,
      label: "💫 Connectivity SDK",
      items: [
        {
          type: "doc",
          id: "sdk/general/connectivity/introduction",
          label: "Introduction",
        },
        {
          type: "category",
          collapsed: true,
          label: "Guides",
          items: [
            {
              type: "doc",
              id: "sdk/general/connectivity/guides/setup",
              label: "Setup",
            },
            {
              type: "doc",
              id: "sdk/general/connectivity/guides/did",
              label: "Decentralized Identity",
            },
            {
              type: "doc",
              id: "sdk/general/connectivity/guides/ux",
              label: "User Experience",
            },
            {
              type: "doc",
              id: "sdk/general/connectivity/guides/ethereum",
              label: "Ethereum",
            },
            {
              type: "doc",
              id: "sdk/general/connectivity/guides/ui",
              label: "User Interface",
            },
            {
              type: "doc",
              id: "sdk/general/connectivity/guides/customization",
              label: "Customization",
            },
            {
              type: "doc",
              id: "sdk/general/connectivity/guides/manage-connectors",
              label: "Manage Connectors",
            },
          ]
        },
        {
          type: "category",
          collapsed: true,
          label: "Connectors",
          items: [
            {
              type: "doc",
              id: "sdk/general/connectivity/connectors/standard",
              label: "Standard",
            },
            {
              type: "doc",
              id: "sdk/general/connectivity/connectors/essentials",
              label: "Essentials",
            },
            {
              type: "doc",
              id: "sdk/general/connectivity/connectors/identity",
              label: "Identity",
            },
            {
              type: "doc",
              id: "sdk/general/connectivity/connectors/custom",
              label: "Custom",
            },
          ]
        },
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Identity SDKs",
      items: [
        {
          type: "category",
          collapsed: false,
          label: "✨ Javascript",
          items: [
            {
              type: "doc",
              id: "sdk/did/js/introduction",
              label: "Introduction",
            },
            {
              type: "doc",
              id: "sdk/did/js/install",
              label: "Installation",
            },
            {
              type: "category",
              collapsed: false,
              label: "📘 Guide",
              items: [
                {
                  type: "doc",
                  id: "sdk/did/js/guide/backend",
                  label: "DIDBackend",
                },
                {
                  type: "category",
                  collapsed: true,
                  label: "DIDStore",
                  items: [
                    {
                      type: "doc",
                      id: "sdk/did/js/guide/store/create",
                      label: "Create",
                    },
                    {
                      type: "doc",
                      id: "sdk/did/js/guide/store/access",
                      label: "Access",
                    },
                    {
                      type: "doc",
                      id: "sdk/did/js/guide/store/import-export",
                      label: "Import/Export",
                    },
                    {
                      type: "doc",
                      id: "sdk/did/js/guide/store/sync",
                      label: "Synchronize",
                    },
                  ]
                },
                {
                  type: "doc",
                  id: "sdk/did/js/guide/root-identity",
                  label: "RootIdentity",
                },
                {
                  type: "doc",
                  id: "sdk/did/js/guide/did",
                  label: "DID",
                },
                {
                  type: "doc",
                  id: "sdk/did/js/guide/json",
                  label: "JSON Web Token",
                },
                {
                  type: "doc",
                  id: "sdk/did/js/guide/credential",
                  label: "Credential and Presentation",
                },
                {
                  type: "doc",
                  id: "sdk/did/js/guide/metadata",
                  label: "Metadata",
                },
                {
                  type: "doc",
                  id: "sdk/did/js/guide/samples",
                  label: "Sample Code",
                }
              ]
            },
          ]
        },
        {
          type: "category",
          collapsed: true,
          label: "Java",
          items: [
            {
              type: "doc",
              id: "sdk/did/java/introduction",
              label: "Introduction",
            }
          ]
        },
        {
          type: "category",
          collapsed: true,
          label: "Swift",
          items: [
            {
              type: "doc",
              id: "sdk/did/swift/introduction",
              label: "Introduction",
            }
          ]
        },
        {
          type: "category",
          collapsed: true,
          label: "C/C++",
          items: [
            {
              type: "doc",
              id: "sdk/did/c/introduction",
              label: "Introduction",
            }
          ]
        }
      ]
    },
    {
      type: "category",
      collapsed: true,
      label: "Hive SDKs",
      items: [
        {
          type: "category",
          collapsed: true,
          label: "Javascript",
          items: [
            {
              type: "doc",
              id: "sdk/hive/js/introduction",
              label: "Introduction",
            },
            {
              type: "doc",
              id: "sdk/hive/js/install",
              label: "Build & Install",
            },
            {
              type: "link",
              href: "https://apidocs.trinity-tech.io/hive-javascript-sdk/index.html",
              label: "API Reference",
            }
          ]
        },
        {
          type: "category",
          collapsed: true,
          label: "Java",
          items: [
            {
              type: "doc",
              id: "sdk/hive/java/introduction",
              label: "Introduction",
            },
            {
              type: "doc",
              id: "sdk/hive/java/install",
              label: "Build & Install",
            },
            {
              type: "category",
              collapsed: true,
              label: "Guides",
              items: [
                {
                  type: "doc",
                  id: "sdk/hive/java/guides/vault-subscription",
                  label: "Vault Subscription",
                },
                {
                  type: "doc",
                  id: "sdk/hive/java/guides/backup-subscription",
                  label: "Backup Subscription",
                },
                {
                  type: "doc",
                  id: "sdk/hive/java/guides/files-service",
                  label: "Files Service",
                },
                {
                  type: "doc",
                  id: "sdk/hive/java/guides/database-service",
                  label: "Database Service",
                },
                {
                  type: "doc",
                  id: "sdk/hive/java/guides/scripting-service",
                  label: "Scripting Service",
                }
              ]
            },
            {
              type: "link",
              href: "https://apidocs.trinity-tech.io/hive-java-sdk/",
              label: "API Reference",
            }
          ]
        },
        {
          type: "category",
          collapsed: true,
          label: "Swift",
          items: [
            {
              type: "doc",
              id: "sdk/hive/swift/introduction",
              label: "Introduction",
            },
            {
              type: "doc",
              id: "sdk/hive/swift/install",
              label: "Build & Install",
            },
            {
              type: "category",
              collapsed: true,
              label: "Guides",
              items: [
                {
                  type: "doc",
                  id: "sdk/hive/swift/guides/vault-subscription",
                  label: "Vault Subscription",
                },
                {
                  type: "doc",
                  id: "sdk/hive/swift/guides/backup-subscription",
                  label: "Backup Subscription",
                },
                {
                  type: "doc",
                  id: "sdk/hive/swift/guides/files-service",
                  label: "Files Service",
                },
                {
                  type: "doc",
                  id: "sdk/hive/swift/guides/database-service",
                  label: "Database Service",
                },
                {
                  type: "doc",
                  id: "sdk/hive/swift/guides/scripting-service",
                  label: "Scripting Service",
                }
              ]
            },
            {
              type: "link",
              href: "https://apidocs.trinity-tech.io/hive-swift-sdk/",
              label: "API Reference",
            }
          ]
        },
      ]
    },
    {
      type: "category",
      collapsed: true,
      label: "Carrier SDKs",
      items: [
        {
          type: "category",
          collapsed: true,
          label: "Javascript",
          items: [
            {
              type: "doc",
              id: "sdk/carrier/js/getting-started",
              label: "Getting Started",
            }
          ]
        },
      ]
    },
  ],
  integratorSidebar: [
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Exchanges </small></b></span>"
    },

    {
      type: "doc",
      id: "integrator/primer",
      label: "Primer",
    },
    {
      type: "doc",
      id: "integrator/mainchain",
      label: "Mainchain",
    },
    {
      type: "doc",
      id: "integrator/esc",
      label: "Smart Chain (ESC)",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Mining Pools </small></b></span>"
    },
    {
      type: "doc",
      id: "integrator/mining",
      label: "Guide",
    },
    {
      type: "html",
      value: "<hr/>"
    },
    {
      type: "html",
      value: "<span class='menu__link'><b><small> Misc </small></b></span>"
    },
    {
      type: "category",
      collapsed: true,
      label: "Transaction Details",
      items: [
        {
          type: "doc",
          id: "integrator/misc/types",
          label: "Types",
        },
        {
          type: "doc",
          id: "integrator/misc/structure",
          label: "Structure",
        },
      ]
    },
  ]

};