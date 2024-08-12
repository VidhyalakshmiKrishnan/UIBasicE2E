const{test, expect} = require('@playwright/test');

test('titlte',async({browser})=>{

    const context=await browser.newContext();
    const page= await context.newPage();
   
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const emailid=page.locator('#username');
    const password=page.locator('#password');
    const doclink=page.locator("[href*='documents-request']");
    await emailid.fill('rahulshetty');
    await password.fill('learning');
    await page.locator('.checkmark').last().click();
    await page.locator('#okayBtn').click();
    await page.locator('select.form-control').selectOption('consult');
    await page.locator('#terms').check();
    await page.locator('#signInBtn').click();
    const errormessage=await page.locator("[style*='block']").textContent();
    console.log(errormessage);
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    await emailid.fill("rahulshettyacademy");
    await password.fill("learning");
    await page.locator('.checkmark').last().click();
    //await page.locator('#okayBtn').click();
    await page.locator('select.form-control').selectOption('consult');
    await page.locator('#terms').check();
    await page.locator('#signInBtn').click();
    await expect(doclink).toHaveAttribute('class','blinkingText');
   const [newpage]= await Promise.all([
    context.waitForEvent('page'),
    doclink.click()
   ]);
   const textfrom_newpage=await newpage.locator('p.red').textContent();
   console.log(textfrom_newpage);
   const newemail=textfrom_newpage.split("@")[1].split(" ")[0];
console.log(newemail);
//await page.locator('#signInBtn').click();
await page.locator('.card-body  a').last().textContent();
//await page.waitForLoadState('networkidle');
await page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum' }).getByRole('button').click();
await page.pause();
await page.locator('li.nav-item a.btn').click();
//await page.locator(".media-body h4").textContent();
await expect(page.locator(".media-body h4")).toContainText("iphone X");
await expect(page.locator(".text-right strong")).toContainText("₹. 100000");
await page.locator(".btn-success").click();
await page.locator(".validate").fill("Stockholm");
await page.pause();

await page.getByText("I agree with the term & Conditions").click();
page.locator("[value='Purchase']").click();
const alertmsg=await page.locator(".alert").textContent();
console.log(alertmsg);
await expect(page.locator(".alert")).toContainText("Success!");
await page.locator(".close").click();

});