import Cards from "./Components/Cards"

const App = () => {
  let card_data = [
    {
      pack: "FREE",
      title: "$0/month",
      user_count: "Single User",
      storage: "50GB Storage",
      public_project: "Unlimited Public Projects",
      access: "Community Access",
      private_project: "Unlimited Private Projects",
      phone_support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      reports: "Monthly Status Reports"
    },
    {
      pack: "PLUS",
      title: "$9/month",
      user_count: "5 Users",
      storage: "50GB Storage",
      public_project: "Unlimited Public Projects",
      access: "Community Access",
      private_project: "Unlimited Private Projects",
      phone_support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      reports: "Monthly Status Reports"
    },
    {
      pack: "PRO",
      title: "$49/month",
      user_count: "Unlimited Users",
      storage: "50GB Storage",
      public_project: "Unlimited Public Projects",
      access: "Community Access",
      private_project: "Unlimited Private Projects",
      phone_support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      reports: "Monthly Status Reports"
    }
  ]
  return (
    <div className="box"><h1 style={{ color: "white" }}>React Price Card</h1>
      <div className="price_card">
        <Cards data = {card_data[0]} />
        <Cards data = {card_data[1]} />
        <Cards data = {card_data[2]} />
      </div>
    </div>
  )
}

export default App