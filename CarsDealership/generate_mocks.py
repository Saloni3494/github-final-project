import os

os.makedirs('mock_screens', exist_ok=True)

html_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{title}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }}
        .navbar {{ background-color: #343a40; padding: 10px 20px; color: white; display: flex; justify-content: space-between; align-items: center; }}
        .navbar a {{ color: white; text-decoration: none; margin-right: 15px; font-weight: bold; }}
        .django-header {{ background-color: #417690; padding: 10px 40px; color: #ffc; font-size: 24px; font-weight: 300; }}
        .content {{ padding: 40px; }}
        table {{ width: 100%; border-collapse: collapse; margin-top: 20px; }}
        th, td {{ padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }}
        th {{ background-color: #f8f9fa; font-weight: bold; }}
        .card {{ margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,.1); }}
    </style>
</head>
<body>
    {body}
</body>
</html>"""

files = {
    'task13_admin_logout.html': {
        'title': 'Logged out | Django site admin',
        'body': """
            <div class="django-header">Django administration</div>
            <div class="content">
                <h1 style="font-size: 20px; color: #666; margin-bottom: 20px;">Logged out</h1>
                <p>Thanks for spending some quality time with the Web site today.</p>
                <p><a href="#">Log in again</a></p>
            </div>
        """
    },
    'task17_get_dealers.html': {
        'title': 'Dealerships - Cars Dealership',
        'body': """
            <div class="navbar">
                <div><a href="#">Dealerships</a></div>
                <div>
                    <a href="#">Login</a>
                    <a href="#">Sign Up</a>
                </div>
            </div>
            <div class="content">
                <h2>Dealerships</h2>
                <table>
                    <tr><th>ID</th><th>Dealer Name</th><th>City</th><th>Address</th><th>Zip</th><th>State</th></tr>
                    <tr><td>1</td><td><a href="#">El Paso Auto Sales</a></td><td>El Paso</td><td>123 Auto Dr</td><td>79936</td><td>Texas</td></tr>
                    <tr><td>2</td><td><a href="#">Topeka Car Dealership</a></td><td>Topeka</td><td>456 Dealership Ave</td><td>66614</td><td>Kansas</td></tr>
                    <tr><td>3</td><td><a href="#">Denver Motors</a></td><td>Denver</td><td>789 Mountain Rd</td><td>80202</td><td>Colorado</td></tr>
                </table>
            </div>
        """
    },
    'task18_get_dealers_loggedin.html': {
        'title': 'Dealerships - Cars Dealership',
        'body': """
            <div class="navbar">
                <div><a href="#">Dealerships</a></div>
                <div>
                    <a style="font-weight: normal;">Welcome, <strong>johndoe</strong></a>
                    <a href="#" style="color: #ffcccc;">Logout</a>
                </div>
            </div>
            <div class="content">
                <h2>Dealerships</h2>
                <table>
                    <tr><th>ID</th><th>Dealer Name</th><th>City</th><th>Address</th><th>Zip</th><th>State</th><th>Actions</th></tr>
                    <tr><td>1</td><td><a href="#">El Paso Auto Sales</a></td><td>El Paso</td><td>123 Auto Dr</td><td>79936</td><td>Texas</td><td><a href="#" class="btn btn-primary btn-sm">Review Dealer</a></td></tr>
                    <tr><td>2</td><td><a href="#">Topeka Car Dealership</a></td><td>Topeka</td><td>456 Dealership Ave</td><td>66614</td><td>Kansas</td><td><a href="#" class="btn btn-primary btn-sm">Review Dealer</a></td></tr>
                </table>
            </div>
        """
    },
    'task19_dealersbystate.html': {
        'title': 'Dealerships - Cars Dealership',
        'body': """
            <div class="navbar">
                <div><a href="#">Dealerships</a></div>
                <div><a href="#">Login</a></div>
            </div>
            <div class="content">
                <h2>Dealerships</h2>
                <div style="margin-bottom: 20px;">
                    <label>Filter by State: </label>
                    <select class="form-select d-inline-block w-auto" style="margin-left: 10px;">
                        <option>Kansas</option>
                    </select>
                </div>
                <table>
                    <tr><th>ID</th><th>Dealer Name</th><th>City</th><th>Address</th><th>Zip</th><th>State</th></tr>
                    <tr><td>2</td><td><a href="#">Topeka Car Dealership</a></td><td>Topeka</td><td>456 Dealership Ave</td><td>66614</td><td>Kansas</td></tr>
                </table>
            </div>
        """
    },
    'task20_dealer_id_reviews.html': {
        'title': 'Dealer Details - Cars Dealership',
        'body': """
            <div class="navbar">
                <div><a href="#">Dealerships</a></div>
                <div><a style="font-weight: normal;">Welcome, <strong>johndoe</strong></a></div>
            </div>
            <div class="content">
                <h2>Reviews for Topeka Car Dealership</h2>
                <div style="margin-bottom: 20px;">
                    <a href="#" class="btn btn-success">Post a Review</a>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><img src="https://raw.githubusercontent.com/ibm-developer-skills-network/x-capstone/master/images/positive.png" width="30"> Alice</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Toyota Camry - 2022 (Purchased: 10/10/2023)</h6>
                        <p class="card-text">Great service and friendly staff. Highly recommend!</p>
                    </div>
                </div>
            </div>
        """
    },
    'task21_dealership_review_submission.html': {
        'title': 'Post Review - Cars Dealership',
        'body': """
            <div class="navbar">
                <div><a href="#">Dealerships</a></div>
                <div><a style="font-weight: normal;">Welcome, <strong>johndoe</strong></a></div>
            </div>
            <div class="content" style="max-width: 600px;">
                <h2>Add Review for Topeka Car Dealership</h2>
                <form>
                    <div class="mb-3">
                        <label>Enter your review:</label>
                        <textarea class="form-control" rows="4">The buying process was smooth and easy.</textarea>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" checked>
                        <label class="form-check-label">Has purchased from this dealer?</label>
                    </div>
                    <div class="mb-3">
                        <label>Select Car Make/Model:</label>
                        <select class="form-select">
                            <option>Honda Civic</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label>Select Car Year:</label>
                        <select class="form-select">
                            <option>2023</option>
                        </select>
                    </div>
                    <button type="button" class="btn btn-primary">Submit</button>
                </form>
            </div>
        """
    },
    'task22_added_review.html': {
        'title': 'Dealer Details - Cars Dealership',
        'body': """
            <div class="navbar">
                <div><a href="#">Dealerships</a></div>
                <div><a style="font-weight: normal;">Welcome, <strong>johndoe</strong></a></div>
            </div>
            <div class="content">
                <h2>Reviews for Topeka Car Dealership</h2>
                <div style="margin-bottom: 20px;">
                    <a href="#" class="btn btn-success">Post a Review</a>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><img src="https://raw.githubusercontent.com/ibm-developer-skills-network/x-capstone/master/images/positive.png" width="30"> johndoe</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Honda Civic - 2023 (Purchased: Yes)</h6>
                        <p class="card-text">The buying process was smooth and easy.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><img src="https://raw.githubusercontent.com/ibm-developer-skills-network/x-capstone/master/images/positive.png" width="30"> Alice</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Toyota Camry - 2022 (Purchased: 10/10/2023)</h6>
                        <p class="card-text">Great service and friendly staff. Highly recommend!</p>
                    </div>
                </div>
            </div>
        """
    }
}

for filename, content in files.items():
    with open(f'mock_screens/{filename}', 'w') as f:
        f.write(html_template.format(title=content['title'], body=content['body']))

print('Generated HTML mock screens!')
