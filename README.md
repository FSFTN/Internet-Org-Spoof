# internet_org_spoof


### Setting up the development environment

###Apache
```sh
sudo apt-get install apache2
service restart apache2
```
###Ruby using rvm(recommended)

```sh
\curl -sSL https://get.rvm.io | bash -s stable --ruby
```
###Ruby from ubuntu repository 

```sh
sudo apt-get install ruby
```
###Check ruby version

```sh
ruby -v
```

### Clone the repo inside /var/www/html

```sh
cd ~/var/www/html
#clone the repo
git clone git@github.com:FSFTN/internet_org_spoof.git
cd internet_org_spoof
#change to develop branch
git checkout develop
```

### Install required gems

```sh
bundle install
```
### Download live-reload plugin
http://livereload.com/extensions/

### Connect guard with live-reload
```sh
#run guard command inside the project root directory
guard
```
### Download kola to convert scss to css
http://koala-app.com/

Note: if kola not opening after successful installation follow the instructions in the below link

https://github.com/oklai/koala/wiki/Unable-to-run-Koala-in-Linux


### Note

If you are not comfortable with the installation process or sass you can still work on the project by simply creating a css file inside `css` directory and include that in the appropriate html file. 
