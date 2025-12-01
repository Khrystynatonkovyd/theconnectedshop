  import {test, Page, expect} from "@playwright/test"

test.describe('check home page elements', () => {

    test.beforeEach(async({page})=>{
         await page.goto('/')
        await expect(page).toHaveURL('/')}) 


    test ('Check url and title', async ({page}) => {
       
        await expect(page).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office') })

    test ('Check logo', async ({page}) => {
        const logoLink= page.locator('a.header__heading-link')
        await expect(logoLink).toBeVisible();
        await expect(logoLink).toHaveAttribute('href','/')
        })
     test ('Serching the existing item', async({page}) => {
         const searchBar=page.locator('#Search-In-Inline')
         const seachFor=page.locator('a.predictive-search__header svg.icon-revert-in-rtl')
         const searchResultHeader=page.locator('h1:has-text("Search results")')
         await expect(searchBar).toBeVisible();
         await searchBar.fill('Smart Door Lock Slim');
         await expect(seachFor).toBeVisible();
         await seachFor.click()
         await expect(searchResultHeader).toBeVisible()
        })
       
        test('Searching the non-existent item', async ({ page }) => {
            const searchBar = page.locator('#Search-In-Inline');
            const searchFor = page.locator('a.predictive-search__header svg.icon-revert-in-rtl');
           // const nonExistingResult = page.locator('.alert alert--warning element-margin-top margin0:has-text("No results found for")');
           //const nonExistingResult = page.getByRole('status');
           const nonExistingResult = page.getByText('No results found for')
            const invalidValue='роодлжд'
            const smartOpen = '\u201C';  // “
            const smartClose = '\u201D'; // ”
            const regex = new RegExp(`No results found for\\s*(?:${smartOpen}|")?${invalidValue}(?:${smartClose}|")?`, 'i');
    
            await expect(searchBar).toBeVisible();
            await searchBar.fill(invalidValue);
            await searchFor.click();
            await expect(nonExistingResult).toHaveText(regex);
        })
            

}) 