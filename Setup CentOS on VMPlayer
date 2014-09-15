Setup CentOS on VMPlayer

root
Centos

Using VM Player create a Centos VM
	install OS later 
	netowrking 
		bridged - replicate ip

Create and install CentOS server [this would not a GUI]

yum update -y
 if host url resolution error

	vi /etc/sysconfig/network-scripts/ifcfg-eth0
	ONBOOT-yes
	NM_CONTROLLED=no

	ifdown eth0
	ifup eth0

vi edior tips @http://www.washington.edu/computing/unix/vi.html

Create new user
	adduser hweb
	passwd hweb
Setup root previleges to newuser
	visudo

	add line --> hweb ALL=(ALL) ALL

update SSH defaults
	vi /etc/ssh/sshd_config

	Port 2211 --> port change for ssh
	PermitRootLogin no --> disable root login
	UseDNS no
	AllowUsers hweb

	/etc/init.d/sshd reload --> make above change effective

Hweb
Hweb@test

press Esc
press :w + Enter
press :q + Enter


restart VM
login as hweb
type su
type root password
mkdir -p /var/www/vaibhavkadian.com/sites/ [this will give Premission Denied if su access not given]

chown -R hweb:hweb /var/www/vaibhavkadian.com/sites
chmod 755 /var/www


configre EPEL
rpm --import https://fedoraproject.org/static/0608B895.txt
rpm -ivh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
rpm --import http://rpms.famillecollet.com/RPM-GPG-KEY-remi
rpm -ivh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

yum install yum-priorities

vi /etc/yum.repos.d/epel.repo
[epel]
enabled=1
priority=10

vi /etc/yum.repos.d/remi.repo
[remi]
enabled=1
priority=10

yum install nginx



http://wiki.centos.org/HowTos/Network/IPTables
https://www.linode.com/docs/websites/nginx/basic-nginx-configuration
ISPConfig

