# gv2gt-mempho

> vue.js Gv2gt Client Application

* Branch: master
* s3 Bucket: mempho.gv2gt.com
* URL: mempho.gv2gt.com
* NOTE: This site is behind a Cloudflare cache

## Pushing to production

### Setup
```
aws configure
cd .git/hooks/pre-push
ln -s ../../pre-push pre-push
```

## Embed code

```
<script>
  window.overrideGv2gt = function () {
    return {
      partner: 133,
      searchAllForGood: false,
      locationSearch: false,
      keywordSearch: false,
      displayFilters: false,
      displayNav: true,
      registerToolbox: true
    }
  }
</script> 
<script src="https://d3ie44n2upemu6.cloudfront.net/static/xdomain.js" slave="https://toolbox.gv2gt.com/proxy.html"></script>
<div id="app"></div>
<script src="https://d3ie44n2upemu6.cloudfront.net/embed.js?0.1"></script>
```


