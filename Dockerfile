FROM httpd:2.4

# Default username, password and UID.
ENV AUTH_USER admin
ENV AUTH_PASS 1q2w3e4r

# Enable vhosts.
RUN sed -i -e 's%#Include conf/extra/httpd-vhosts.conf%Include conf/extra/httpd-vhosts.conf%g' /usr/local/apache2/conf/httpd.conf

# Add our custom vhost.
COPY vhost.conf /usr/local/apache2/conf/extra/httpd-vhosts.conf

# Create server root and set it as workdir.
WORKDIR /var/www
COPY ./peiqi /var/www/peiqi
COPY ./qingy/ /var/www/qingy
COPY ./edge /var/www/edge
COPY ./pochouse /var/www/pochouse
COPY ./wgpsec /var/www/wgpsec
COPY ./assets /var/www/assets

COPY ./img /var/www/img
COPY ./index.html /var/www/

# Add entrypoint to create .htpasswd file.
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 80

CMD ["httpd-foreground"]