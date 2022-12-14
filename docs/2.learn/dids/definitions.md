---
title: Definitions
---

## DID

Elastos DID supports two DID formats. The first is primitive DID, which uses the ID sidechain address encoded by Bitcoin-style Base58 - the ID string is case-sensitive. The second is customized DID, which is also unique - this will be discussed in the next chapter.

### Primitive

Primitive DID is just an identifier which can be verified by cryptography. It's important to note that DID is a string, where the most fundamental aspect is the key system associated with this string. All related contents of DID are relevant to the identifier - that is, the corresponding contents (such as document and credential) can be found through the DID identifier.

### Custom

Customized DID a short DID string is provided by the user, which is also unique. Like a primitive DID, the details of the customized DID are expressed in the DID document.

A Customized DID is generated and managed by at least one primitive DID as a controller. The DID content is recognized and signed by multiple controllers through multi-signature rules. The controller can also take the place of a customized DID to perform certain operations, such as signing.

The Customized DID Document can not contain any form of a key - authorization and entrustment can be completed by the holder’s key.

It also supports adding and deleting holders (it must contain one holder), as well as changing multi-signature rules. When the Customized DID Document changes the holder or the multi-signature rules, it's necessary to complete the document chain operation through the ownership transfer transaction.

Changing the holder is a cautious and rigorous operation. In view of this, the transaction must be completed by using the main key of the DID's original holder based on the modified document and transfer ticket at the same time. Among them, the contents of the transfer ticket are DID topic, the recipient of the transfer ticket, and the transaction ID of the previous DID Document operation. The transfer ticket needs to be signed by the original holder according to the multi-signature rule to show the original holder’s approval of the replacement holder.

## Root Identity

Each of us has multiple accounts and IDs that we need to handle or manage differently - while engaging in the decentralized world, we can meet this demand through ownership of multiple DIDs.

So how can the same person simultaneously and conveniently own and manage multiple DIDs? The Elastos DID SDK uses the HD wallet to generate multiple addresses, allowing for the generation and management of multiple DIDs.

The HD wallet uses mnemonics as seeds or roots that can generate multiple addresses. Correspondingly, the Elastos DID SDK utilizes root identity to correspond to seeds - the Elastos DID SDK then obtains root identity by providing mnemonic and pass phases, or provided an expanded key.

In addition, the HD wallet can derive multiple addresses from seeds. Similarly, the root identity can also derive a series of DIDs (the derived addresses are used as DID strings, and the corresponding public and private keys are used in the DID key system, which can be used for signature verification). These series of DIDs are managed by the holder of the root identity.

One person can also generate multiple DIDs through one mnemonic or extended key.

## Document

More detailed information of DID is carried by DID Document, such as encrypted information, verification methods and service points. Moreover, DID is represented by DID Document in the chain.

The Elastos DID SDK provides that the DID generated by root identity is presented in the form of DID Document, and it is the simplest DID Document.
If you want DID Document to contain more information, you can operate it through DID Document builder, such as adding public key, deleting voucher, etc., and finally get the desired DID Document through seal operation.

The verification method is contained in DID Document, and the inclusive public key is the carrier of it. DID can sign the data with the private key and verify the signature with the public key in DID Document to ensure that the data has not been tampered with.

DID Document must contain a main key, which is cryptographically verifiable with the DID string.

The public key is used for digital signature, encryption and other operations, the main purpose of which is to realize identity authentication or establish secure communication with service endpoints. In addition, the public key can be used for DID authorization and delegation, as well as used to verify the legality of the DID CRUD operation.

Authentication is a mechanism by which entities can prove that they are associated with DID by encryption. The authentication attribute can specify which DID’s public keys can be used for authentication.

Authorization is a mechanism for explaining how to perform actions on behalf of DID topic. Entrustment refers to the mechanism that DID topic can authorize others to act on their behalf. This is especially important for the DID security aftermath in the case of DID key loss. When the subject can no longer access its key or the key is leaked, the trusted third party authorized by the DID holder can declare to disable the DID, thus prohibiting some malicious behaviors caused by the key leakage.

The authorization and entrustment of Elastos DID only supports the necessary minimum authorization, that is, authorizing a trusted third party to disable the target DID, and does not support other operations.

Besides publishing authentication and authorization mechanism, another main purpose of DID document is to publish the service endpoint corresponding to DID topic. The service endpoint can represent any type of service that the principal wants to announce, including decentralized identity management services for further discovery, authentication, authorization or interaction.

For the sake of safety, the DID topic of Elastos has an effective period, the longest effective period can be set to 5 years, and users can set it to a shorter effective period according to their own needs. A DID topic that exceeds the effective period will be recognized as an invalid DID topic by the DID parser.
Based on ID side chain, the operations related to Elastos DID document storage need to be operated in the client that supports ID side chain. Primitive DID needs to use the authentication public key corresponding to DID topic to launch a transaction for itself. Customized DID can use the public key corresponding to DID topic or the holder’s authentication public key to do the transaction. However, if the customized DID is out of service, DID topic authorization and entrusted DID public key are allowed to initiate related operations.

## Verifiable Credential

In principle, DID Document does not carry any personal information (except embedded verifiable credentials), so the DID owner can record the key information that needs to be disclosed, or that which is related to specific entities in verifiable credential.

The Elastos DID Document can embed public verifiable credentials to support the requirement that DID publicly binds entity information. Verifiable credential can only be provided by an issuer, which is essentially a DID. Of course, the DID owner can be an individual or a trusted organization.

There are only two ways to expose verifiable credential - one is embedding it in DID Document, and the other is encapsulating it in a verifiable presentation.

## Verifiable Presentation

Verifiable presentation refers to a data set containing a subset of verifiable certificates and countersigns of an entity, which is used to show its identity to a third party. Generally speaking, the verifiable presentation contains vouchers for one DID identity, which can be issued by different third-party entities to express its identity information.

The verifiable presentation can contain multiple vouchers or none at all, which are formed once and cannot be modified. Moreover, it can only encapsulate its own verifiable credential, and its holder signs the result. Therefore, the holder of the verifiable presentation is the subject of the verifiable credential, otherwise, the verifiable presentation is invalid.

## DID Backend

DID Backend is the middle layer between DID content and chain interaction, serving as a bridge between the local and EID chains.

## DID Store

The storage structure of Elastos DID runs through the entire DID system, mainly managing and saving the following contents: Root Identity, DID Document, Verifiable Credentials, and Private Key.
