export function bindAddress(data) {
  let fullAddress = data.address;
  let extraAddress = "";
  let zoneCodes = data.zonecode;

  if (data.addressType === "R") {
    if (data.bname !== "") {
      extraAddress += data.bname;
    }
    if (data.buildingName !== "") {
      extraAddress +=
        extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
    }
    fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
  }

  return { fullAddress, zoneCodes };
}
