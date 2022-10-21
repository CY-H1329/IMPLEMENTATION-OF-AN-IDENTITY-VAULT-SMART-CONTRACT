// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./sha1.sol" ;

contract idBody {

  address private scAddr;
  uint public scUserPubKey;
  string public scUserName;
  string public scUserEmail; 
  string public scUserData; 
  uint public scUserTimestamp; 
  uint public scNetworkTimestamp; 
  uint public scUserDataNonce;
  uint public scNetworkDataNonce;
  string public sign;

  string [] public scValSigns;

  struct uCertificate{
    address scAddr;
    uint scUserPubKey;
    string scUserName;
    string scUserEmail; 
    string scUserData; 
    uint scUserTimestamp;
    uint scUserDataNonce; 
    uint scNetworkTimestamp; 
    uint scNetworkDataNonce;
    string [] scValSigns;
  }

  constructor(){
    scAddr = address(this);
    scUserTimestamp = block.timestamp;
  }
  function getscAdress()public view returns (address){
    return scAddr;
  }
  
  function getscUserData() public view returns (string memory){
    return scUserData;
  }

  function getscUserName() public view returns (string memory){
    return scUserName;
  }

  function getscUserPubKey() public view returns (uint){
    return scUserPubKey;
  }

  function getscUserEmail() public view returns (string memory){
    return scUserEmail;
  }

  function getscAddr() public view returns (address){
    return scAddr;
  }

  function getUserAdd() public view returns (address){
    return msg.sender;
  }

  function getTimeStamp() public view returns (uint){
    //attention, current block timestamp as seconds since unix epoch
    return scUserTimestamp;
  }

  function getscUserDataNonce() public view returns (uint){
    return scUserDataNonce;
  }

  function getValSigns() public view returns(string[] memory){
    return scValSigns;
}

  function getSignature() public view returns (string memory){
      return sign;
    }

  function bytes20ToString(bytes20 val) public pure returns(string memory){
    bytes32 value = bytes32(uint256(uint160(val)));
    bytes memory alphabet = "0123456789abcdef";

    bytes memory str = new bytes(51);
    str[0] = '0';
    str[1] = 'x';
    for (uint256 i = 0; i < 20; i++) {
        str[2+i*2] = alphabet[uint8(value[i + 12] >> 4)];
        str[3+i*2] = alphabet[uint8(value[i + 12] & 0x0f)];
    }
    return string(str);
  }
  
  function getscHashCalcStr() public view returns (string memory){
    return bytes20ToString( SHA1.sha1(bytes(abi.encodePacked(scUserName, scUserEmail, scUserData, uint2str(scUserDataNonce)))));
  }

  function uint2str(uint _i) public pure returns (string memory) {
    if (_i == 0) {
        return "0";
    }
    uint j = _i;
    uint len;
    while (j != 0) {
        len++;
        j /= 10;
    }
    bytes memory bstr = new bytes(len);
    uint k = len;
    while (_i != 0) {
        k = k-1;
        uint8 temp = (48 + uint8(_i - _i / 10 * 10));
        bytes1 b1 = bytes1(temp);
        bstr[k] = b1;
        _i /= 10;
    }
    return string(bstr);
  }



  function getscHashCalcStrNetwork() public view returns (string memory){
    return bytes20ToString( SHA1.sha1(bytes(abi.encodePacked(uint2str(scUserPubKey), scUserName, scUserEmail, scUserData, uint2str(scNetworkDataNonce)))));
  }

  function getscHashCalc() public view returns (bytes20){
    return SHA1.sha1(bytes(abi.encodePacked(scUserName, scUserEmail, scUserData)));
  }

  function getscUserTimestamp() public view returns (uint){
    return scUserTimestamp;
  }

  function setscUserPubKey(uint _scUserPubKey) external{
    scUserPubKey =  _scUserPubKey;
  }

  function setscUserTimestamp(uint _scUserTimestamp) external{
    scUserTimestamp = _scUserTimestamp;
  }

  function setscNetworkTimestamp(uint _scNetworkTimestamp) external{
    scNetworkTimestamp = _scNetworkTimestamp;
  }

  function setscUserName(string memory _UserName) external{
    scUserName =  _UserName;
  }

  function setscUserDataNonce(uint _scUserDataNonce) external{
    scUserDataNonce = _scUserDataNonce;
  }
  function setscUserEmail(string memory _UserEmail) external{
    scUserEmail =  _UserEmail;
  }

  function setscUserData(string memory _UserData) external{
    scUserData =  _UserData;
  }

  function setSign(string memory _Sign1, string memory _Sign2) external{
    //sign = string(abi.encodePacked(_Sign1, _Sign2));
    //sign = _Sign1;
    scValSigns.push(_Sign1);
    scValSigns.push(_Sign2);
  }

  function setSignNetwork(string memory _Sign1, string memory _Sign2) external{
    //sign = string(abi.encodePacked(_Sign1, _Sign2));
    scValSigns.push(_Sign1);
    scValSigns.push(_Sign2);
  }

  function getscNetworkTimestamp()public view returns (uint){
    return scNetworkTimestamp;
  }

  function getscNetworkDataNonce() public view returns (uint){
    return scNetworkDataNonce;
  }

  function setscNetworkDataNonce(uint _scNetworkDataNonce) external {
    scNetworkDataNonce = _scNetworkDataNonce;
  }

  function addressTostring(address addr) public pure returns(string memory){
    bytes memory addressBytes = abi.encodePacked(addr);
    bytes memory stringBytes = new bytes(42);
    stringBytes[0] = '0';
    stringBytes[1] = 'x';
    for(uint i=0; i<20; i++){
      uint8 leftvalue = uint8(addressBytes[i])/16;
      uint8 rightvalue = uint8(addressBytes[i])-16 * leftvalue;
      bytes1 leftchar = leftvalue<10 ? bytes1(leftvalue+48) : bytes1(leftvalue+87);
      bytes1 rightchar = rightvalue<10 ? bytes1(rightvalue+48) : bytes1(rightvalue+87);
      stringBytes[2*i+3] = rightchar;
      stringBytes[2*i+2] = leftchar;
    }
    return string(stringBytes);
  }
  function getUserSign1() public view returns (string memory){
    return scValSigns[0];
  }

  function getUserSign2() public view returns (string memory){
    return scValSigns[1];
  }

  function getNetworkSign1() public view returns (string memory){
    return scValSigns[2];
  }

  function getNetworkSign2() public view returns (string memory){
    return scValSigns[3];
  }

}