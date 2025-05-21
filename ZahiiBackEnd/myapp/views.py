from django.http import JsonResponse
from .models import Product

def product_list(request):
    products = Product.objects.all()
    data = [
        {
            'id': p.id,
            'name': p.name,
            'price': float(p.price),
            'category': p.category.name,
            'image': p.image.url if p.image else None
        } for p in products
    ]
    return JsonResponse(data, safe=False)
