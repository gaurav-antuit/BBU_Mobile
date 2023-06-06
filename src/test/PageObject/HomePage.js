exports.LoginPage = class LoginPage
{
    constructor(page) 
    {
        const Header_Title ='Intelligent Ordering Network'

        this.page = page

       this.username_textbox =page.getByPlaceholder('first.last@grupobimbo.com or first.last@gbsupport.net')

       this.next_button =page.getByRole('button', { name: 'Next' })

       this.password_textbox =page.getByPlaceholder('Password') 

       this.signin_button =page.getByRole('button', { name: 'Sign in' })

       this.yes_button =page.getByRole('button', { name: 'Yes' })
       
       this.toggleMenu_button =page.getByTestId('toggleMenu');

       this.Logout_button = page.getByText('Sign Out');

       this.Growth_Dollor_text = page.locator('$ Growth'    )
     
    }
    async GotoBBUURL()
    {

        await this.page.goto('/') ;
    }

    async GotoRoutePage()
    {
       
        await this.page.goto('https://qa.bbu-ion.com/?routeEnvId=070164&routeName=CHAPEN+MATT'); 
    }
    
    async Login(username , password)
    {
        await this.username_textbox.fill(username) 
        
        await this.next_button.click()

        await this.password_textbox.fill(password)

        await this.signin_button.click()
        
        await this.yes_button.click() 
     

    }

    async Logout()
    {
             
        await this.toggleMenu_button.click()

        await this.Logout_button.click()
    }

    async  Language()
    {

        await this.page.getByTestId('toggleMenu').click();

        await this.page.locator('.icon').nth(1).click();

        
    }

    async Homepage ()
    {
       const  Header_Title ='Intelligent Ordering Network' ;

    }

    async growhtDollor ()

    {
  await this.page.locator('.percentage-text').nth(0)
    }

    async RouteItem ()
    {
        await this.page.locator('.item-name')
    }
    

}