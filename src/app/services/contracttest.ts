declare module contracttest{
    const stickerABI: [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "_operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "_approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_fee",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            }
          ],
          "name": "RoyaltyFee",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            }
          ],
          "name": "RoyaltyOwner",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "_ids",
              "type": "uint256[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "_values",
              "type": "uint256[]"
            }
          ],
          "name": "TransferBatch",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "TransferSingle",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "_value",
              "type": "string"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            }
          ],
          "name": "URI",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            }
          ],
          "name": "balanceOf",
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
              "internalType": "address[]",
              "name": "_owners",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_ids",
              "type": "uint256[]"
            }
          ],
          "name": "balanceOfBatch",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "burn",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "burnFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getCodeAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "_codeAddress",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "initialize",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "initialized",
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
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_operator",
              "type": "address"
            }
          ],
          "name": "isApprovedForAll",
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
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_tokenSupply",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_uri",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_royaltyFee",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
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
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "_ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes",
              "name": "_data",
              "type": "bytes"
            }
          ],
          "name": "safeBatchTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "_ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_values",
              "type": "uint256[]"
            }
          ],
          "name": "safeBatchTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "_data",
              "type": "bytes"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_approved",
              "type": "bool"
            }
          ],
          "name": "setApprovalForAll",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "_interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            }
          ],
          "name": "tokenCountOfOwner",
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
              "internalType": "address[]",
              "name": "_owners",
              "type": "address[]"
            }
          ],
          "name": "tokenCountOfOwnerBatch",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
            }
          ],
          "name": "tokenIdByIndex",
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
              "internalType": "uint256[]",
              "name": "_indexes",
              "type": "uint256[]"
            }
          ],
          "name": "tokenIdByIndexBatch",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
            }
          ],
          "name": "tokenIdOfOwnerByIndex",
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
              "name": "_owner",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "_indexes",
              "type": "uint256[]"
            }
          ],
          "name": "tokenIdOfOwnerByIndexBatch",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            }
          ],
          "name": "tokenInfo",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenIndex",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenSupply",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "tokenUri",
                  "type": "string"
                },
                {
                  "internalType": "address",
                  "name": "royaltyOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "royaltyFee",
                  "type": "uint256"
                }
              ],
              "internalType": "struct ITokenInfo.TokenInfo",
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
              "internalType": "uint256[]",
              "name": "_ids",
              "type": "uint256[]"
            }
          ],
          "name": "tokenInfoBatch",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenIndex",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenSupply",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "tokenUri",
                  "type": "string"
                },
                {
                  "internalType": "address",
                  "name": "royaltyOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "royaltyFee",
                  "type": "uint256"
                }
              ],
              "internalType": "struct ITokenInfo.TokenInfo[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            }
          ],
          "name": "tokenRoyaltyFee",
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
              "internalType": "uint256[]",
              "name": "_ids",
              "type": "uint256[]"
            }
          ],
          "name": "tokenRoyaltyFeeBatch",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            }
          ],
          "name": "tokenRoyaltyOwner",
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
              "internalType": "uint256[]",
              "name": "_ids",
              "type": "uint256[]"
            }
          ],
          "name": "tokenRoyaltyOwnerBatch",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            }
          ],
          "name": "tokenSupply",
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
              "internalType": "uint256[]",
              "name": "_ids",
              "type": "uint256[]"
            }
          ],
          "name": "tokenSupplyBatch",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
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
              "name": "_owner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_newAddress",
              "type": "address"
            }
          ],
          "name": "updateCodeAddress",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            }
          ],
          "name": "uri",
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
              "internalType": "uint256[]",
              "name": "_ids",
              "type": "uint256[]"
            }
          ],
          "name": "uriBatch",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
    
      // should not be changed unless the contract interface is modified
      const pasarABI: [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "_ids",
              "type": "uint256[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "_values",
              "type": "uint256[]"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "_data",
              "type": "bytes"
            }
          ],
          "name": "ERC1155BatchReceived",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "_data",
              "type": "bytes"
            }
          ],
          "name": "ERC1155Received",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_seller",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "_buyer",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_orderId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_price",
              "type": "uint256"
            }
          ],
          "name": "OrderBid",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_seller",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_orderId",
              "type": "uint256"
            }
          ],
          "name": "OrderCanceled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_seller",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "_buyer",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_orderId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "_copyrightOwner",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_price",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_royalty",
              "type": "uint256"
            }
          ],
          "name": "OrderFilled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_seller",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_orderId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_minPrice",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_endTime",
              "type": "uint256"
            }
          ],
          "name": "OrderForAuction",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_seller",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_orderId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_price",
              "type": "uint256"
            }
          ],
          "name": "OrderForSale",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_seller",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "_orderId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_oldPrice",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_newPrice",
              "type": "uint256"
            }
          ],
          "name": "OrderPriceChanged",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_orderId",
              "type": "uint256"
            }
          ],
          "name": "bidForOrder",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_orderId",
              "type": "uint256"
            }
          ],
          "name": "buyOrder",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_orderId",
              "type": "uint256"
            }
          ],
          "name": "cancelOrder",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_orderId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_price",
              "type": "uint256"
            }
          ],
          "name": "changeOrderPrice",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_endTime",
              "type": "uint256"
            }
          ],
          "name": "createOrderForAuction",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_price",
              "type": "uint256"
            }
          ],
          "name": "createOrderForSale",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_buyer",
              "type": "address"
            }
          ],
          "name": "getBuyerByAddr",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "orderCount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "filledCount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "paid",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "royalty",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.BuyerInfo",
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
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
            }
          ],
          "name": "getBuyerByIndex",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "orderCount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "filledCount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "paid",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "royalty",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.BuyerInfo",
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
              "internalType": "uint256[]",
              "name": "_indexes",
              "type": "uint256[]"
            }
          ],
          "name": "getBuyerByIndexBatch",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "orderCount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "filledCount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "paid",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "royalty",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.BuyerInfo[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getBuyerCount",
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
              "name": "_buyer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
            }
          ],
          "name": "getBuyerFilledByIndex",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "orderId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderState",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddr",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "bids",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "lastBidder",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lastBid",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "filled",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "royaltyOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "royaltyFee",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.OrderInfo",
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
              "internalType": "address",
              "name": "_buyer",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "_indexes",
              "type": "uint256[]"
            }
          ],
          "name": "getBuyerFilledByIndexBatch",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "orderId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderState",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddr",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "bids",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "lastBidder",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lastBid",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "filled",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "royaltyOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "royaltyFee",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.OrderInfo[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_buyer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
            }
          ],
          "name": "getBuyerOrderByIndex",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "orderId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderState",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddr",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "bids",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "lastBidder",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lastBid",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "filled",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "royaltyOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "royaltyFee",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.OrderInfo",
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
              "internalType": "address",
              "name": "_buyer",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "_indexes",
              "type": "uint256[]"
            }
          ],
          "name": "getBuyerOrderByIndexBatch",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "orderId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderState",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddr",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "bids",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "lastBidder",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lastBid",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "filled",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "royaltyOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "royaltyFee",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.OrderInfo[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getCodeAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "_codeAddress",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
            }
          ],
          "name": "getOpenOrderByIndex",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "orderId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderState",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddr",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "bids",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "lastBidder",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lastBid",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "filled",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "royaltyOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "royaltyFee",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.OrderInfo",
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
              "internalType": "uint256[]",
              "name": "_indexes",
              "type": "uint256[]"
            }
          ],
          "name": "getOpenOrderByIndexBatch",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "orderId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderState",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddr",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "bids",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "lastBidder",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lastBid",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "filled",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "royaltyOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "royaltyFee",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.OrderInfo[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getOpenOrderCount",
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
              "internalType": "uint256",
              "name": "_orderId",
              "type": "uint256"
            }
          ],
          "name": "getOrderById",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "orderId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderState",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddr",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "bids",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "lastBidder",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lastBid",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "filled",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "royaltyOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "royaltyFee",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.OrderInfo",
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
              "internalType": "uint256[]",
              "name": "_orderIds",
              "type": "uint256[]"
            }
          ],
          "name": "getOrderByIdBatch",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "orderId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderState",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddr",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "bids",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "lastBidder",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lastBid",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "filled",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "royaltyOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "royaltyFee",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.OrderInfo[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getOrderCount",
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
              "name": "_seller",
              "type": "address"
            }
          ],
          "name": "getSellerByAddr",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "orderCount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "openCount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "earned",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "royalty",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.SellerInfo",
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
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
            }
          ],
          "name": "getSellerByIndex",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "orderCount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "openCount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "earned",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "royalty",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.SellerInfo",
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
              "internalType": "uint256[]",
              "name": "_indexes",
              "type": "uint256[]"
            }
          ],
          "name": "getSellerByIndexBatch",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "orderCount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "openCount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "earned",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "royalty",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.SellerInfo[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getSellerCount",
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
              "name": "_seller",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
            }
          ],
          "name": "getSellerOpenByIndex",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "orderId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderState",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddr",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "bids",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "lastBidder",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lastBid",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "filled",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "royaltyOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "royaltyFee",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.OrderInfo",
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
              "internalType": "address",
              "name": "_seller",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "_indexes",
              "type": "uint256[]"
            }
          ],
          "name": "getSellerOpenByIndexBatch",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "orderId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderState",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddr",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "bids",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "lastBidder",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lastBid",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "filled",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "royaltyOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "royaltyFee",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.OrderInfo[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_seller",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
            }
          ],
          "name": "getSellerOrderByIndex",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "orderId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderState",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddr",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "bids",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "lastBidder",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lastBid",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "filled",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "royaltyOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "royaltyFee",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.OrderInfo",
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
              "internalType": "address",
              "name": "_seller",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "_indexes",
              "type": "uint256[]"
            }
          ],
          "name": "getSellerOrderByIndexBatch",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "orderId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderType",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "orderState",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sellerAddr",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "buyerAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "bids",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "lastBidder",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "lastBid",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "filled",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "royaltyOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "royaltyFee",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IPasarInfo.OrderInfo[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getTokenAddress",
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
          "inputs": [],
          "name": "initialize",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_tokenAddress",
              "type": "address"
            }
          ],
          "name": "initialize",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "initialized",
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
              "internalType": "address",
              "name": "_operator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "_ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes",
              "name": "_data",
              "type": "bytes"
            }
          ],
          "name": "onERC1155BatchReceived",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_operator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "_data",
              "type": "bytes"
            }
          ],
          "name": "onERC1155Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
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
              "internalType": "uint256",
              "name": "_orderId",
              "type": "uint256"
            }
          ],
          "name": "settleAuctionOrder",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "_interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_newAddress",
              "type": "address"
            }
          ],
          "name": "updateCodeAddress",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
    ]
    
}