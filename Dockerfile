FROM httpd:2.4

COPY ./peiqi /usr/local/apache2/htdocs/peiqi
COPY ./qingy/ /usr/local/apache2/htdocs/qingy
COPY ./edge /usr/local/apache2/htdocs/edge
COPY ./pochouse /usr/local/apache2/htdocs/pochouse

COPY ./img /usr/local/apache2/htdocs/img
COPY ./index.html /usr/local/apache2/htdocs/