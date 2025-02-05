const ABI = {
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "BRIDGEMANAGER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "bridgeConfigVersion",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenAddress",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "chainID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "calculateSwapFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "chainID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "calculateSwapFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllTokenIDs",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "result",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "chainID",
          "type": "uint256"
        }
      ],
      "name": "getMaxGasPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "chainID",
          "type": "uint256"
        }
      ],
      "name": "getPoolConfig",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "poolAddress",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "metaswap",
              "type": "bool"
            }
          ],
          "internalType": "struct BridgeConfigV3.Pool",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getRoleMember",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleMemberCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenID",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "chainID",
          "type": "uint256"
        }
      ],
      "name": "getToken",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "tokenAddress",
              "type": "string"
            },
            {
              "internalType": "uint8",
              "name": "tokenDecimals",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "maxSwap",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minSwap",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "swapFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxSwapFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minSwapFee",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "hasUnderlying",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUnderlying",
              "type": "bool"
            }
          ],
          "internalType": "struct BridgeConfigV3.Token",
          "name": "token",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenAddress",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "chainID",
          "type": "uint256"
        }
      ],
      "name": "getTokenByAddress",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "tokenAddress",
              "type": "string"
            },
            {
              "internalType": "uint8",
              "name": "tokenDecimals",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "maxSwap",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minSwap",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "swapFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxSwapFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minSwapFee",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "hasUnderlying",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUnderlying",
              "type": "bool"
            }
          ],
          "internalType": "struct BridgeConfigV3.Token",
          "name": "token",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "chainID",
          "type": "uint256"
        }
      ],
      "name": "getTokenByEVMAddress",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "tokenAddress",
              "type": "string"
            },
            {
              "internalType": "uint8",
              "name": "tokenDecimals",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "maxSwap",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minSwap",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "swapFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxSwapFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minSwapFee",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "hasUnderlying",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUnderlying",
              "type": "bool"
            }
          ],
          "internalType": "struct BridgeConfigV3.Token",
          "name": "token",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenID",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "chainID",
          "type": "uint256"
        }
      ],
      "name": "getTokenByID",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "tokenAddress",
              "type": "string"
            },
            {
              "internalType": "uint8",
              "name": "tokenDecimals",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "maxSwap",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minSwap",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "swapFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxSwapFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minSwapFee",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "hasUnderlying",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUnderlying",
              "type": "bool"
            }
          ],
          "internalType": "struct BridgeConfigV3.Token",
          "name": "token",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "chainID",
          "type": "uint256"
        }
      ],
      "name": "getTokenID",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenAddress",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "chainID",
          "type": "uint256"
        }
      ],
      "name": "getTokenID",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenID",
          "type": "string"
        }
      ],
      "name": "getUnderlyingToken",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "tokenAddress",
              "type": "string"
            },
            {
              "internalType": "uint8",
              "name": "tokenDecimals",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "maxSwap",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minSwap",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "swapFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxSwapFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minSwapFee",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "hasUnderlying",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUnderlying",
              "type": "bool"
            }
          ],
          "internalType": "struct BridgeConfigV3.Token",
          "name": "token",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenID",
          "type": "string"
        }
      ],
      "name": "hasUnderlyingToken",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenID",
          "type": "string"
        }
      ],
      "name": "isTokenIDExist",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenID",
          "type": "string"
        }
      ],
      "name": "removeTokenMapping",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "chainID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxPrice",
          "type": "uint256"
        }
      ],
      "name": "setMaxGasPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "chainID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "poolAddress",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "metaswap",
          "type": "bool"
        }
      ],
      "name": "setPoolConfig",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "poolAddress",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "metaswap",
              "type": "bool"
            }
          ],
          "internalType": "struct BridgeConfigV3.Pool",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenID",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "chainID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "tokenDecimals",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "maxSwap",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minSwap",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "swapFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxSwapFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minSwapFee",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "hasUnderlying",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isUnderlying",
          "type": "bool"
        }
      ],
      "name": "setTokenConfig",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenID",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "chainID",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "tokenAddress",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "tokenDecimals",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "maxSwap",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minSwap",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "swapFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxSwapFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minSwapFee",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "hasUnderlying",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isUnderlying",
          "type": "bool"
        }
      ],
      "name": "setTokenConfig",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "devdoc": {
    "kind": "dev",
    "methods": {
      "calculateSwapFee(address,uint256,uint256)": {
        "details": "This means the fee should be calculated based on the chain that the nodes emit a tx on",
        "params": {
          "amount": "in native token decimals",
          "chainID": "destination chain ID to query the token config for",
          "tokenAddress": "address of the destination token to query token config for"
        },
        "returns": {
          "_0": "Fee calculated in token decimals"
        }
      },
      "calculateSwapFee(string,uint256,uint256)": {
        "details": "This means the fee should be calculated based on the chain that the nodes emit a tx on",
        "params": {
          "amount": "in native token decimals",
          "chainID": "destination chain ID to query the token config for",
          "tokenAddress": "address of the destination token to query token config for"
        },
        "returns": {
          "_0": "Fee calculated in token decimals"
        }
      },
      "getRoleAdmin(bytes32)": {
        "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}."
      },
      "getRoleMember(bytes32,uint256)": {
        "details": "Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information."
      },
      "getRoleMemberCount(bytes32)": {
        "details": "Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role."
      },
      "getToken(string,uint256)": {
        "params": {
          "chainID": "Chain ID of which token address + config to get",
          "tokenID": "String input of the token ID for the token"
        }
      },
      "getTokenByAddress(string,uint256)": {
        "params": {
          "chainID": "Chain ID of which token to get config for",
          "tokenAddress": "Matches the token ID by using a combo of address + chain ID"
        }
      },
      "getTokenByID(string,uint256)": {
        "params": {
          "chainID": "Chain ID of which token address + config to get",
          "tokenID": "String input of the token ID for the token"
        }
      },
      "getTokenID(address,uint256)": {
        "params": {
          "chainID": "chainID of which to get token ID for",
          "tokenAddress": "address of token to get ID for"
        }
      },
      "getUnderlyingToken(string)": {
        "params": {
          "tokenID": "string token ID"
        }
      },
      "grantRole(bytes32,address)": {
        "details": "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role."
      },
      "hasRole(bytes32,address)": {
        "details": "Returns `true` if `account` has been granted `role`."
      },
      "hasUnderlyingToken(string)": {
        "params": {
          "tokenID": "String to check if it is a withdraw/underlying token"
        }
      },
      "renounceRole(bytes32,address)": {
        "details": "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`."
      },
      "revokeRole(bytes32,address)": {
        "details": "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role."
      },
      "setTokenConfig(string,uint256,address,uint8,uint256,uint256,uint256,uint256,uint256,bool,bool)": {
        "params": {
          "chainID": "chain ID to use for the token config object",
          "hasUnderlying": "bool which represents whether this is a global mint token or one to withdraw()",
          "isUnderlying": "bool which represents if this token is the one to withdraw on the given chain",
          "maxSwap": "maximum amount of token allowed to be transferred at once - in native token decimals",
          "maxSwapFee": "max swap fee to be charged - in native token decimals",
          "minSwap": "minimum amount of token needed to be transferred at once - in native token decimals",
          "minSwapFee": "min swap fee to be charged - in native token decimals - especially useful for mainnet ETH",
          "swapFee": "percent based swap fee -- 10e6 == 10bps",
          "tokenAddress": "token address of the token on the given chain",
          "tokenDecimals": "decimals of token",
          "tokenID": "string ID to set the token config object form"
        }
      },
      "setTokenConfig(string,uint256,string,uint8,uint256,uint256,uint256,uint256,uint256,bool,bool)": {
        "params": {
          "chainID": "chain ID to use for the token config object",
          "hasUnderlying": "bool which represents whether this is a global mint token or one to withdraw()",
          "isUnderlying": "bool which represents if this token is the one to withdraw on the given chain",
          "maxSwap": "maximum amount of token allowed to be transferred at once - in native token decimals",
          "maxSwapFee": "max swap fee to be charged - in native token decimals",
          "minSwap": "minimum amount of token needed to be transferred at once - in native token decimals",
          "minSwapFee": "min swap fee to be charged - in native token decimals - especially useful for mainnet ETH",
          "swapFee": "percent based swap fee -- 10e6 == 10bps",
          "tokenAddress": "token address of the token on the given chain",
          "tokenDecimals": "decimals of token",
          "tokenID": "string ID to set the token config object form"
        }
      }
    },
    "title": "BridgeConfig contract",
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {
      "calculateSwapFee(address,uint256,uint256)": {
        "notice": "Calculates bridge swap fee based on the destination chain's token transfer."
      },
      "calculateSwapFee(string,uint256,uint256)": {
        "notice": "Calculates bridge swap fee based on the destination chain's token transfer."
      },
      "getAllTokenIDs()": {
        "notice": "Returns a list of all existing token IDs converted to strings"
      },
      "getMaxGasPrice(uint256)": {
        "notice": "gets the max gas price for a chain"
      },
      "getToken(string,uint256)": {
        "notice": "Returns the full token config struct"
      },
      "getTokenByAddress(string,uint256)": {
        "notice": "Returns token config struct, given an address and chainID"
      },
      "getTokenByID(string,uint256)": {
        "notice": "Returns the full token config struct"
      },
      "getTokenID(address,uint256)": {
        "notice": "Returns the token ID (string) of the cross-chain token inputted"
      },
      "getUnderlyingToken(string)": {
        "notice": "Returns which token is the underlying token to withdraw"
      },
      "hasUnderlyingToken(string)": {
        "notice": "Returns true if the token has an underlying token -- meaning the token is deposited into the bridge"
      },
      "isTokenIDExist(string)": {
        "notice": "Public function returning if token ID exists given a string"
      },
      "setMaxGasPrice(uint256,uint256)": {
        "notice": "sets the max gas price for a chain"
      },
      "setTokenConfig(string,uint256,address,uint8,uint256,uint256,uint256,uint256,uint256,bool,bool)": {
        "notice": "Main write function of this contract - Handles creating the struct and passing it to the internal logic function"
      },
      "setTokenConfig(string,uint256,string,uint8,uint256,uint256,uint256,uint256,uint256,bool,bool)": {
        "notice": "Main write function of this contract - Handles creating the struct and passing it to the internal logic function"
      }
    },
    "notice": "This token is used for configuring different tokens on the bridge and mapping them across chains.*",
    "version": 1
  }
}

export default ABI
