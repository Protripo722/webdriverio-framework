class DataGenerator {
  generateRandomString(length, type = "alphanumeric") {
    const chars = {
      numeric: "0123456789",
      alphabetic: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      alphanumeric: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    };

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[type][Math.floor(Math.random() * chars[type].length)];
    }

    return result;
  }

  generateRandomEmail(prefix = "pz") {
    const domain = "pl.pl";
    const randomString = this.generateRandomString(4, "numeric");
    return `${prefix}${randomString}@${domain}`;
  }
}
export default new DataGenerator();
