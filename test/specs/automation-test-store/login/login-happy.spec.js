import HomePage from "../../../pageObjects/automation-test-store/home.page";
import testData from "../../../data/testData";
import MyAccountPage from "../../../pageObjects/automation-test-store/my-account.page";
import TopMenuComp from "../../../pageObjects/automation-test-store/components/top-menu.comp";
import LoginPage from "../../../pageObjects/automation-test-store/login.page";
import commands from "../../../../utils/commands";

describe("LOGIN PAGE - happy path", () => {
  beforeEach(async () => {
    await HomePage.open();
    await commands.waitThenClick(TopMenuComp.loginOrRegister);
    await commands.waitThenSetValue(LoginPage.loginName, testData.registeredUser.loginName);
    await commands.waitThenSetValue(LoginPage.password, testData.registeredUser.password);
    await commands.waitThenClick(LoginPage.loginButton);
  });

  it("logs in (via login page) and logs out (via side menu)", async () => {
    await expect(await MyAccountPage.MyAccountPageHeader).toHaveText(
      "MY ACCOUNT"
    );
    await commands.waitThenClick(MyAccountPage.sideMenuLogoff);
    await expect(await commands.waitThenGetText(MyAccountPage.logoutHeader)).toHaveText("ACCOUNT LOGOUT");
  });

  it("logs in and logs out (via submenu)", async () => {
    await commands.waitThenClick(MyAccountPage.sideMenuLogoff);
    await expect(await commands.waitThenGetText(MyAccountPage.logoutHeader)).toHaveText("ACCOUNT LOGOUT");
  });

  it("logs in and logs out (via topmenu)", async () => {
    await TopMenuComp.welcomeBackDropdown.moveTo();

    await commands.waitThenClick(MyAccountPage.topMenuLogoff);

    await expect(await commands.waitThenGetText(MyAccountPage.logoutHeader)).toHaveText("ACCOUNT LOGOUT");
  });

  it("logs in and logs out (via footer)", async () => {
    await commands.waitThenClick(MyAccountPage.footerMenuLogoff);
    await expect(await commands.waitThenGetText(MyAccountPage.logoutHeader)).toHaveText("ACCOUNT LOGOUT");
  });
});
