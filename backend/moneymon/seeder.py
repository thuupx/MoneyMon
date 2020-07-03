import random
from django_seed import Seed

seeder = Seed.seeder(locale='en-us')

from transactions.models import Transactions

from wallet.models import Wallet, Categories
from users.models import User


wallet_ids = Wallet.objects.all()#.values_list('id', flat=True)
categories_ids = Categories.objects.all()#.values_list('id',flat=True)
user_ids = User.objects.all()#.values_list('id', flat=True)
actions = ['IN','OUT']

seeder.add_entity(Transactions, 10, {
    'name': lambda x: 'transaction_'+ seeder.faker.name(),
    'amount': lambda x: random.randint(10**4,10**6), # lambda x: seeder.faker.email(),
    'action': lambda x: random.choice(actions),
    'category': lambda x: (random.choice(categories_ids)),
    'from_wallet': lambda x:(random.choice(wallet_ids)),
    'created_at': lambda x: seeder.faker.date_time_this_year(),
    'user': lambda x: (random.choice(user_ids))
})

inserted_pks = seeder.execute()

print(inserted_pks)