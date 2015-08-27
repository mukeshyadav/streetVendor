
Steps for setting up the YatraOne project
-----------------------------------------

1. Install bower and gulp ->
   npm install -g gulp bower

2. Install Compass ->
   npm install gulp-compass

3. Install node packages ->
   npm install

4. Install Ruby -> apt-get install ruby1.9.1

5. Install Ruby Bundler -> apt-get install ruby-bundler

6. Install Ruby Gems -> apt-get install rubygems

7. install bower components -> bower install

8. Install Compass -> sudo gem install compass

9. Build and Run the web module on Node Server -> gulp

Deep links
----------

    SRP
    ---
    http://mobile.yatra.com/hotel-booking/#!/srp?productType=HOTEL&checkinDate=21%2F06%2F2015&checkoutDate=26%2F06%2F2015&roomRequests%5B0%5D.id=1&roomRequests%5B0%5D.noOfAdults=1&roomRequests%5B0%5D.noOfChildren=0&source=BOOKING_ENGINE&tenant=B2C&city.name=Bangalore&city.code=Bangalore

    Details page
    ------------
    http://localhost:8080/#!/detail?type=all&tenant=B2C&checkInDate=27%2F07%2F2015&checkOutDate=31%2F07%2F2015&rooms%5B0%5D.noOfAdults=1&apiKey=m37tQkYM4OkcBf6HKny0&hotelId=00004138

    Review Page
    -----------

    http://mobile.yatra.com/hotel-booking/#!/review/0000387634?hotelId=TGR-00002450&checkInDate=15%2F06%2F2015&checkOutDate=17%2F06%2F2015&roomTypeId=00000068748&room%5B0%5D.noOfAdults=3&room%5B0%5D.noOfChildren=1
